import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test-utils';
import { Home } from './Home';
import { LINK_GROUPS } from '@/data/links';

describe('Home', () => {
  it('renders the heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 1, name: /joseph edmonds/i })).toBeInTheDocument();
  });

  it('renders every outbound link with its href', () => {
    render(<Home />);
    for (const group of LINK_GROUPS) {
      for (const link of group.links) {
        const anchor = screen.getByRole('link', { name: new RegExp(link.title, 'i') });
        expect(anchor).toHaveAttribute('href', link.href);
        expect(anchor).toHaveAttribute('rel', expect.stringContaining('noopener'));
      }
    }
  });

  it('links to both business sites', () => {
    render(<Home />);
    expect(screen.getByRole('link', { name: /lts commerce/i })).toHaveAttribute(
      'href',
      'https://ltscommerce.dev'
    );
    expect(screen.getByRole('link', { name: /edmonds commerce/i })).toHaveAttribute(
      'href',
      'https://edmondscommerce.co.uk'
    );
  });
});
