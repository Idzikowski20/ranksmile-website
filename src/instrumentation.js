// Next.js calls register() once when the server process starts. We use it to
// boot the content live-reload watcher in-process during development.
//
// Server-only, so no client-bundle impact. The import below is skipped unless
// NODE_ENV === 'development' and is marked webpack/turbopack-ignore, so the
// watcher and `ws` do not make it to the build.
export async function register() {
  if (process.env.NODE_ENV !== 'development') return;
  if (process.env.NEXT_RUNTIME !== 'nodejs') return;
  const { join, dirname } = require('path');
  const { fileURLToPath, pathToFileURL } = require('url');
  // Build the path off import.meta.url without `new URL(literal, import.meta.url)`:
  // bundlers special-case that pattern and rewrite it to a chunk path.
  const here = dirname(fileURLToPath(import.meta.url));
  const watcherUrl = pathToFileURL(join(here, '..', 'scripts', 'watch-content.mjs')).href;
  await import(/* webpackIgnore: true */ /* turbopackIgnore: true */ watcherUrl);
}
