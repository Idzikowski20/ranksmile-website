const fs = require('fs');
const path = require('path');

const { glob } = require('glob');
const matter = require('gray-matter');

const getExcerpt = require('./get-excerpt');

const postCache = new Map();
const slugCache = new Map();

const shouldUseCache = () => process.env.NODE_ENV !== 'development';

const getPostSlugs = async (pathname) => {
  if (shouldUseCache() && slugCache.has(pathname)) {
    return slugCache.get(pathname);
  }

  const files = glob.sync(`${pathname}/**/*.md`, {
    ignore: ['**/README.md', '**/unused/**', '**/shared-content/**', '**/GUIDE_TEMPLATE.md'],
  });
  // glob returns native separators, so on Windows a match uses backslashes while
  // `pathname` uses forward slashes. The replace below then strips nothing, and the
  // separators end up URL-encoded in routes and in the sitemap.
  const slugs = files.map((file) =>
    file.split(path.sep).join('/').replace(pathname, '').replace('.md', '')
  );

  if (shouldUseCache()) {
    slugCache.set(pathname, slugs);
  }

  return slugs;
};

const getPostBySlug = (slug, pathname) => {
  const cacheKey = `${pathname}:${slug}`;

  if (shouldUseCache() && postCache.has(cacheKey)) {
    return postCache.get(cacheKey);
  }

  try {
    const source = fs.readFileSync(`${process.cwd()}/${pathname}/${slug}.md`, 'utf-8');
    const { data, content } = matter(source);
    const excerpt = getExcerpt(content, 200);
    const post = { data, content, excerpt };

    if (shouldUseCache()) {
      postCache.set(cacheKey, post);
    }

    return post;
  } catch (_e) {
    return null;
  }
};

module.exports = {
  getPostSlugs,
  getPostBySlug,
};
