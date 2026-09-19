export const dynamic = 'force-static';

export async function GET() {
  return Response.json({
    $schema: 'https://static.modelcontextprotocol.io/schemas/2025-12-11/server.schema.json',
    name: 'pl.ranksmile/mcp',
    title: 'Ranksmile',
    description:
      'Official Ranksmile MCP server. Read your workspaces, articles, content scores, rankings and AI visibility from an agent.',
    version: '1.0.0',
    websiteUrl: 'https://ranksmile.pl/mcp',
    icons: [
      {
        src: 'https://ranksmile.pl/brand/ranksmile-logo-light.svg',
        mimeType: 'image/svg+xml',
        sizes: ['any'],
        theme: 'light',
      },
      {
        src: 'https://ranksmile.pl/brand/ranksmile-logo-dark.svg',
        mimeType: 'image/svg+xml',
        sizes: ['any'],
        theme: 'dark',
      },
    ],
    remotes: [
      {
        type: 'streamable-http',
        url: 'https://app.ranksmile.pl/mcp',
      },
    ],
  });
}
