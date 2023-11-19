import { PrismicPreview } from '@prismicio/next';

import { Navigation } from '@/components/navigation';
import { getMetadata } from '@/lib/fetch-prismic';
import { suisse } from '@/lib/fonts';

import '@/styles/index.scss';

export async function generateMetadata() {
  const metadata = await getMetadata();

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={suisse.className}>
        <Navigation />
        {children}
      </body>
      <PrismicPreview repositoryName="floema-exam" />
    </html>
  );
}
