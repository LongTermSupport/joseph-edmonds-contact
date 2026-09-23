import { describe, it, expect } from 'vitest';
import { LINK_GROUPS } from './links';

describe('LINK_GROUPS', () => {
  const allLinks = LINK_GROUPS.flatMap(group => group.links);

  it('has business, photography and connect groups in that order', () => {
    expect(LINK_GROUPS.map(group => group.id)).toEqual(['business', 'photography', 'connect']);
  });

  it('uses https for every link', () => {
    for (const link of allLinks) {
      expect(link.href.startsWith('https://')).toBe(true);
    }
  });

  it('has unique ids across all groups', () => {
    const ids = allLinks.map(link => link.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('includes the two business sites, the photo site, Instagram and LinkedIn', () => {
    const hrefs = allLinks.map(link => link.href);
    expect(hrefs).toContain('https://ltscommerce.dev');
    expect(hrefs).toContain('https://edmondscommerce.co.uk');
    expect(hrefs).toContain('https://ltsphoto.uk');
    expect(hrefs).toContain('https://www.instagram.com/ltsphoto.uk');
    expect(hrefs).toContain('https://linkedin.com/in/edmondscommerce');
  });
});
