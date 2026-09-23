import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test-utils';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the copyright line', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2026 Joseph Edmonds/)).toBeInTheDocument();
  });
});
