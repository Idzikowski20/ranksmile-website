// The WordPress plugin page. Item ids are kept from the page's previous life because
// they key the section images in the page component.
const wordpressPageContent = {
  slug: 'wordpress',
  pageLabel: 'WordPress plugin',
  hero: {
    label: 'Ranksmile for WordPress',
    title: 'Send the finished draft straight to WordPress',
    illustrationDescription:
      'A draft written in the Ranksmile editor is published to a connected WordPress site, arriving as Gutenberg blocks with its images sideloaded into the media library.',
    primaryAction: { label: 'Start your free trial', linkKey: 'signup' },
    secondaryAction: { label: 'See plans', linkKey: 'pricing' },
  },
  storageBenefits: {
    title: 'The draft leaves the editor and lands as a real post.',
    highlightedTitle:
      'Headings, links and images arrive intact, as Gutenberg blocks rather than a wall of pasted HTML.',
    items: [
      {
        id: 's3-compatible',
        label: 'No copy-paste',
        title: 'Publish in one click',
        description:
          'Your HTML is converted to Gutenberg blocks and every image is sideloaded into the media library, so the post is editable in WordPress like any other.',
      },
      {
        id: 'one-credential',
        label: 'One connection',
        title: 'No FTP, no API console',
        description:
          'Connecting mints a shared key that is stored encrypted on both sides. Nothing else to configure, and you can disconnect a site at any time.',
      },
      {
        id: 'branchable-storage',
        label: 'Many sites',
        title: 'One workspace, every client site',
        description:
          'Connect as many WordPress sites as you run. Each Brand Space keeps its own connection, so a client draft can only reach that client site.',
      },
    ],
  },
  isolatedEnvironments: {
    title: 'Connected in three steps.',
    highlightedTitle:
      'Download, upload, activate. The site then shows up in your Ranksmile settings, ready to publish to.',
    items: [
      {
        id: 'download-plugin',
        title: 'Download the plugin',
        description:
          'Grab the Ranksmile plugin ZIP from your workspace settings. This is the file you will upload in WordPress admin.',
      },
      {
        id: 'upload-plugin',
        title: 'Upload it in WordPress',
        description:
          'In WordPress go to Plugins, then Add New, then Upload Plugin. Choose the ZIP you downloaded and click Install Now.',
      },
      {
        id: 'activate-plugin',
        title: 'Activate and connect',
        description:
          'Click Activate, open the Ranksmile plugin screen and connect your account. The site appears in your Ranksmile settings from then on.',
      },
    ],
  },
  configuration: {
    label: 'Publish options',
    title: 'Decide where the post lands before you send it',
    filename: 'publish-options.json',
    code: `{
  "status": "draft",
  "type": "post",
  "author": "editorial",
  "categories": ["SEO"],
  "tags": ["ai-visibility"],
  "metaTitle": "How AI engines pick who they cite",
  "metaDescription": "What the five engines read before they name a brand.",
  "customFields": {
    "acf_reading_time": "6 min"
  }
}`,
    items: [
      {
        title: 'Your taxonomy',
        description:
          'Post types, categories, tags and authors are read from your site, so you pick from what actually exists there instead of typing names and hoping.',
      },
      {
        title: 'Draft or live',
        description:
          'Publish straight away, or send it as <code>draft</code>, <code>pending</code>, <code>private</code> or a scheduled <code>future</code> post and let an editor take it from there.',
      },
      {
        title: 'Updates, not duplicates',
        description:
          'The WordPress post id is stored against the article, so publishing the same piece again updates that post instead of creating a second one.',
      },
    ],
  },
  faqItems: [
    {
      question: 'What is the Ranksmile WordPress plugin?',
      answer:
        '<p>A plugin you install on your own WordPress site so that drafts written in the Ranksmile editor can be published to it directly. It converts your content to Gutenberg blocks, sideloads the images, and keeps the post linked to the article it came from.</p>',
      initialState: 'open',
    },
    {
      question: 'How do I connect my site?',
      answer:
        '<p>Three steps: download the plugin ZIP from your workspace settings, upload it in WordPress under Plugins, then Add New, then Upload Plugin, and click Activate. Open the Ranksmile plugin screen, connect your account, and the site appears in your Ranksmile settings.</p>',
    },
    {
      question: 'What happens to my formatting and images?',
      answer:
        '<p>Headings, links and lists come across as native Gutenberg blocks rather than one pasted HTML block. Images are sideloaded into your WordPress media library, so they live on your site rather than hotlinking back to us.</p>',
    },
    {
      question: 'Can I publish as a draft instead of going live?',
      answer:
        '<p>Yes. Each publish carries a status, so you can send a post as <code>draft</code>, <code>pending</code>, <code>private</code>, or schedule it as a <code>future</code> post. Nothing goes live unless you choose <code>publish</code>.</p>',
    },
    {
      question: 'Can I connect more than one site?',
      answer:
        '<p>Yes. Connections are stored per Brand Space, so an agency can run one WordPress site per client and a draft can only be published to the site belonging to its own space.</p>',
    },
    {
      question: 'What happens if I publish the same article twice?',
      answer:
        '<p>It updates the existing post. Ranksmile stores the WordPress post id against the article the first time you publish, so later publishes overwrite that post instead of creating duplicates.</p>',
    },
  ],
  backendServicesTitle: 'Everything that feeds the draft.',
};

module.exports = { wordpressPageContent };
