// Source of truth (spec-agnostic) for Ranksmile's machine-readable agent-discovery
// surfaces — the raw facts (endpoint URLs, auth servers, spec locations) plus
// small builder functions that assemble the served payloads from those facts.
//
// This module intentionally knows NOTHING about the discovery specs themselves
// (RFC 9727, MCP, agentskills.io, …). The inventory of endpoints, their spec
// links, and the per-spec validators live in config/agent-endpoints.yaml and
// scripts/verify-agent-endpoints.mjs. That verifier imports the builders below
// and checks their output against each spec AND against these constants, so the
// files can never drift from the source of truth.
//
// CommonJS (like constants/content.js) so it is consumable three ways:
//   - ESM named imports from Next route handlers  (import { buildApiCatalog } …)
//   - require() from next.config.js
//   - require() from the Node verifier script
//
// When a surface changes (new MCP endpoint, moved spec, new auth server), edit
// it HERE — never hand-edit the individual route/JSON files.

// The Ranksmile MCP server. OAuth metadata mirrors what the resource server
// advertises at https://app.ranksmile.pl/.well-known/oauth-authorization-server
// (self-onboarding via RFC 7591 dynamic client registration).
const MCP_SERVER = {
  connectUrl: 'https://app.ranksmile.pl/mcp',
  transport: 'streamable-http',
  authorizationServer: 'https://app.ranksmile.pl',
  cardUrl: 'https://ranksmile.pl/.well-known/mcp/server-card.json',
  serverInfo: { name: 'Ranksmile MCP', version: '1.0.0' },
};

// ── Payload builders ───────────────────────────────────────────────────────
// Each builder returns the exact JSON body served at the corresponding path.
// The route handlers are thin wrappers around these so the verifier can assert
// the served payload straight from the source of truth.

// /.well-known/mcp/server-card.json — `url` is the required connect endpoint per
// the discovery convention; `authentication` advertises OAuth self-onboarding.
// `endpoint` is kept for backward compatibility.
function buildMcpServerCard() {
  return {
    serverInfo: MCP_SERVER.serverInfo,
    url: MCP_SERVER.connectUrl,
    endpoint: MCP_SERVER.connectUrl,
    authentication: {
      type: 'oauth2',
      authorization_server: MCP_SERVER.authorizationServer,
    },
    capabilities: { tools: {}, resources: {} },
  };
}

module.exports = {
  MCP_SERVER,
  buildMcpServerCard,
};
