/**
 * Page - minimal page wrapper. Sets the document title on the client after
 * hydration; the SSG prerender bakes the same title into the static HTML.
 */

import { useEffect, type ReactNode } from 'react';
import { Footer } from './Footer';

export interface PageProps {
  title: string;
  description?: string;
  children: ReactNode;
}

export function Page({ title, description, children }: PageProps) {
  useEffect(() => {
    document.title = title;
    if (description) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
