import type { RouteEntry } from './types/routing';

/**
 * Type-safe routes. A single page today; the shape is kept so that adding a
 * route later is a one-line change rather than a refactor.
 */
export const ROUTES = {
  home: { path: '/', label: 'Home' },
} as const satisfies Record<string, RouteEntry>;

export type RoutePath = (typeof ROUTES)[keyof typeof ROUTES]['path'];
