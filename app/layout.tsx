import { createClient } from '@/prismicio';
import { PrismicPreview } from '@prismicio/next';

import { suisse } from '@/lib/fonts';

import '@/styles/index.scss';

export async function generateMetadata() {
  const client = createClient();
  const metadata = await client.getSingle('metadata');

  return {
    title: metadata.data.title,
    description: metadata.data.description,
    openGraph: {
      images: metadata.data.image.url,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={suisse.className}>{children}</body>
      <PrismicPreview repositoryName="floema-exam" />
    </html>
  );
}
