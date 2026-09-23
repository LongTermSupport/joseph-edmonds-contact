import { describe, it, expect } from 'vitest';
import { render, screen } from '@/test-utils';
import { Page } from './Page';

describe('Page', () => {
  it('renders children inside main and sets the document title', () => {
    render(
      <Page title="Test Title">
        <p>Hello</p>
      </Page>
    );
    expect(screen.getByRole('main')).toHaveTextContent('Hello');
    expect(document.title).toBe('Test Title');
  });

  it('renders the footer', () => {
    render(
      <Page title="Test Title">
        <p>Hello</p>
      </Page>
    );
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
