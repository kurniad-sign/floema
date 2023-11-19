import { createClient } from '@/prismicio';

export default async function Home() {
  const client = createClient();
  const page = await client.getSingle('metadata');

  console.log(page.data);

  return <main>Hello World</main>;
}
