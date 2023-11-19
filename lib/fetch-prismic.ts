import { createClient } from '@/prismicio';

export async function getMetadata() {
  const client = createClient();
  const data = await client.getSingle('metadata');

  return data.data;
}
