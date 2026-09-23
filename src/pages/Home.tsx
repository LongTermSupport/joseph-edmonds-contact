import { Page } from '@/components/layout/Page';
import { Container } from '@/components/layout/Container';
import { Section } from '@/components/layout/Section';
import { LINK_GROUPS, type OutboundLink } from '@/data/links';

export const PAGE_TITLE = 'Joseph Edmonds';
export const PAGE_DESCRIPTION =
  'Joseph Edmonds: engineer, author and photographer from West Yorkshire. Links to LTS Commerce, Edmonds Commerce, LTS Photo, LinkedIn and GitHub.';

function LinkCard({ link }: { link: OutboundLink }) {
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full bg-white border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-md transition-all duration-200"
    >
      <span className="block text-lg font-semibold font-heading text-gray-900 group-hover:text-primary-dark transition-colors">
        {link.title}
      </span>
      <span className="block text-sm text-primary mb-3">{link.host}</span>
      <span className="block text-sm text-gray-600 leading-relaxed">{link.description}</span>
    </a>
  );
}

export function Home() {
  return (
    <Page title={PAGE_TITLE} description={PAGE_DESCRIPTION}>
      <div className="bg-gradient-to-b from-primary-tint to-white">
        <Section spacing="xl">
          <Container size="sm">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 animate-fade-in-up">
              <img
                src="/headshot-320.webp"
                alt="Joseph Edmonds"
                width={160}
                height={160}
                className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg shrink-0"
              />
              <div className="text-center sm:text-left">
                <h1 className="mb-4">Joseph Edmonds</h1>
                <p className="text-lg text-gray-700 mb-3">
                  Engineer, author and photographer, working from Shipley in West Yorkshire.
                </p>
                <p className="text-gray-600 mb-0">
                  I have been building e-commerce and PHP systems since the early noughties, I
                  wrote a book about modern PHP for Packt, and these days most of my working time
                  goes on making AI-driven development safe enough to trust. Everything I do lives
                  on one of the sites below, so this page is simply the signpost.
                </p>
              </div>
            </div>
          </Container>
        </Section>
      </div>

      {LINK_GROUPS.map(group => (
        <Section key={group.id} spacing="md">
          <Container size="sm">
            <h2 className="mt-0 mb-6 text-sm font-semibold uppercase tracking-widest text-primary-dark">
              {group.heading}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {group.links.map(link => (
                <LinkCard key={link.id} link={link} />
              ))}
            </div>
          </Container>
        </Section>
      ))}
    </Page>
  );
}
