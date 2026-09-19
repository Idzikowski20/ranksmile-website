import { describe, it, expect, beforeAll } from 'vitest';

beforeAll(() => {
  process.env.NEXT_PUBLIC_DEFAULT_SITE_URL = 'https://ranksmile.pl';
});

describe('generateOrganizationSchema', () => {
  it('returns a complete Organization node (no postal address)', async () => {
    const { generateOrganizationSchema } = await import('./schema');
    const s = generateOrganizationSchema();

    expect(s['@context']).toBe('https://schema.org');
    expect(s['@type']).toBe('Organization');
    expect(s.name).toBe('Ranksmile');
    expect(s.legalName).toBe('Globalzone');
    expect(s.url).toBe('https://ranksmile.pl');
    expect(s.description).toBeTruthy();
    expect(s.logo).toMatch(/^https?:\/\//);
    expect(s.contactPoint?.['@type']).toBe('ContactPoint');
    expect(s.contactPoint?.contactType).toBeTruthy();
    // Product decision: no PostalAddress
    expect(s.address).toBeUndefined();
  });

  // The social accounts in constants/links.js are still Neon's. Until they are
  // Ranksmile's, claiming them in sameAs would assert someone else's profiles as
  // this organization's, to every crawler that reads the structured data.
  it('does not claim social profiles it does not own', async () => {
    const { generateOrganizationSchema } = await import('./schema');
    const s = generateOrganizationSchema();

    expect(s.sameAs).toBeUndefined();
  });

  it('produces JSON-serialisable output', async () => {
    const { generateOrganizationSchema } = await import('./schema');
    expect(() => JSON.stringify(generateOrganizationSchema())).not.toThrow();
  });
});
