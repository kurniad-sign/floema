import { createClient } from '@/prismicio';

export async function getMetadata() {
  const client = createClient();
  const page = await client.getSingle('metadata');

  return page.data;
}

export async function getAbout() {
  const client = createClient();
  const page = await client.getSingle('about');

  return page.data;
}
