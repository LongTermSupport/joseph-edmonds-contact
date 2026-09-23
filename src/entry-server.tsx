import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { AppContent } from './App';
import { PAGE_DESCRIPTION, PAGE_TITLE } from './pages/Home';
import { ROUTES } from './routes';

export interface RenderResult {
  html: string;
  title: string;
  description: string;
  url: string;
  type: 'website';
  image: string;
  jsonLd?: string;
}

const SITE_NAME = 'Joseph Edmonds';
const SITE_URL = 'https://joseph.edmonds.contact';
const OG_IMAGE = `${SITE_URL}/headshot.webp`;

interface PersonJsonLd {
  '@context': string;
  '@type': 'Person';
  name: string;
  url: string;
  image: string;
  jobTitle: string;
  sameAs: string[];
}

const PERSON_JSON_LD: PersonJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Joseph Edmonds',
  url: SITE_URL,
  image: OG_IMAGE,
  jobTitle: 'Engineer, author and photographer',
  sameAs: [
    'https://ltscommerce.dev',
    'https://edmondscommerce.co.uk',
    'https://ltsphoto.uk',
    'https://www.instagram.com/ltsphoto.uk',
    'https://linkedin.com/in/edmondscommerce',
    'https://github.com/LongTermSupport',
    'https://amazon.com/author/joseph_edmonds',
  ],
};

export function render(url: string): RenderResult {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppContent />
    </StaticRouter>
  );

  return {
    html,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: SITE_URL,
    type: 'website',
    image: OG_IMAGE,
    jsonLd: JSON.stringify(PERSON_JSON_LD),
  };
}

export { SITE_URL, OG_IMAGE, SITE_NAME };

export function getRoutes(): string[] {
  return [ROUTES.home.path];
}
