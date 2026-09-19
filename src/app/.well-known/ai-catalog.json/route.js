import catalog from './catalog.json';

export const dynamic = 'force-static';

// AI Catalog (https://ai-catalog.io/) — a typed, discoverable index of
// Ranksmile's AI artifacts. The catalog is a thin discovery + trust layer that
// points at each artifact's native metadata; it does not redefine those
// formats. Served at /.well-known/ai-catalog.json per the spec.
//
// ./catalog.json is hand-maintained: the only entry is the MCP server, whose
// own card carries the detail. The handler exists (rather than a static public/
// file) so it can set the spec-mandated application/ai-catalog+json type.
export function GET() {
  return new Response(JSON.stringify(catalog), {
    headers: { 'Content-Type': 'application/ai-catalog+json' },
  });
}
