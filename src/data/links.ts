import type { ExternalLink } from '@/types/routing';

/**
 * Every outbound destination on the site, in one place.
 */
export interface OutboundLink {
  readonly id: string;
  readonly title: string;
  readonly href: ExternalLink;
  readonly host: string;
  readonly description: string;
}

export interface LinkGroup {
  readonly id: string;
  readonly heading: string;
  readonly links: readonly OutboundLink[];
}

export const LINK_GROUPS: readonly LinkGroup[] = [
  {
    id: 'business',
    heading: 'Business',
    links: [
      {
        id: 'ltscommerce',
        title: 'LTS Commerce',
        href: 'https://ltscommerce.dev',
        host: 'ltscommerce.dev',
        description:
          'My own practice: engineering, fractional CTO work, and the tooling that makes agent-written code safe to ship.',
      },
      {
        id: 'edmondscommerce',
        title: 'Edmonds Commerce',
        href: 'https://edmondscommerce.co.uk',
        host: 'edmondscommerce.co.uk',
        description:
          'The specialist e-commerce agency I founded in 2007, still providing Magento and PHP development to businesses built on open source.',
      },
    ],
  },
  {
    id: 'photography',
    heading: 'Photography',
    links: [
      {
        id: 'ltsphoto',
        title: 'LTS Photo',
        href: 'https://ltsphoto.uk',
        host: 'ltsphoto.uk',
        description: 'My photography site.',
      },
      {
        id: 'instagram',
        title: 'Instagram',
        href: 'https://www.instagram.com/ltsphoto.uk',
        host: '@ltsphoto.uk',
        description: 'The same photographs, as I post them.',
      },
    ],
  },
  {
    id: 'connect',
    heading: 'Connect',
    links: [
      {
        id: 'linkedin',
        title: 'LinkedIn',
        href: 'https://linkedin.com/in/edmondscommerce',
        host: 'linkedin.com/in/edmondscommerce',
        description: 'Where I write about e-commerce, engineering practice and working with AI.',
      },
      {
        id: 'github',
        title: 'GitHub',
        href: 'https://github.com/LongTermSupport',
        host: 'github.com/LongTermSupport',
        description: 'Open source: QA toolchains, the Claude Code hooks daemon and more.',
      },
      {
        id: 'amazon-author',
        title: 'Amazon author page',
        href: 'https://amazon.com/author/joseph_edmonds',
        host: 'amazon.com/author/joseph_edmonds',
        description: 'The Art of Modern PHP 8, published by Packt in 2021, and whatever comes next.',
      },
    ],
  },
];
