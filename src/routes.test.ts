import { describe, it, expect } from 'vitest';
import { ROUTES } from './routes';

describe('ROUTES', () => {
  it('defines the home route at the root path', () => {
    expect(ROUTES.home.path).toBe('/');
    expect(ROUTES.home.label).toBe('Home');
  });
});
