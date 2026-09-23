import { describe, it, expect } from 'vitest';
import { render, getRoutes, SITE_URL } from './entry-server';

describe('entry-server', () => {
  it('lists only the root route for prerendering', () => {
    expect(getRoutes()).toEqual(['/']);
  });

  it('renders the home page to HTML with title, description and JSON-LD', () => {
    const result = render('/');
    expect(result.html).toContain('Joseph Edmonds');
    expect(result.html).toContain('https://ltscommerce.dev');
    expect(result.title).toBe('Joseph Edmonds');
    expect(result.description.length).toBeGreaterThan(20);
    expect(result.url).toBe(SITE_URL);
    expect(result.jsonLd).toBeDefined();
    const jsonLd: unknown = JSON.parse(result.jsonLd ?? '{}');
    expect(jsonLd).toMatchObject({ '@type': 'Person', name: 'Joseph Edmonds' });
  });
});
