import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test-utils';
import { AppContent } from './App';

describe('AppContent', () => {
  it('renders the home page at the root', () => {
    render(<AppContent />, { initialEntries: ['/'] });
    expect(screen.getByRole('heading', { level: 1, name: /joseph edmonds/i })).toBeInTheDocument();
  });

  it('renders the home page for any unknown path', () => {
    render(<AppContent />, { initialEntries: ['/does-not-exist'] });
    expect(screen.getByRole('heading', { level: 1, name: /joseph edmonds/i })).toBeInTheDocument();
  });

  it('marks the body as loaded after mount', () => {
    render(<AppContent />);
    expect(document.body.classList.contains('loaded')).toBe(true);
  });
});
