import { createClient } from '@/prismicio';
import { Content } from '@prismicio/client';

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

export async function getDetail(uid: string) {
  const client = createClient();
  const page = await client.getByUID('produ', uid, {
    fetchLinks: 'col.title',
  });

  return page.data;
}

export async function getCollections() {
  const client = createClient();
  const home = await client.getSingle('h');
  const collections = await client.getAllByType<
    Content.ColDocument & {
      data: {
        products: Array<{
          products_product: Content.ProduDocument;
        }>;
      };
    }
  >('col', {
    fetchLinks: 'produ.product',
  });

  return {
    collections: collections.map((collection) => collection.data),
    home: home.data,
  };
}

export async function getHome() {
  const client = createClient();
  const home = await client.getSingle('h');
  const collections = await client.getAllByType<
    Content.ColDocument & {
      data: {
        products: Array<{
          products_product: Content.ProduDocument;
        }>;
      };
    }
  >('col', {
    fetchLinks: 'produ.product',
  });

  return {
    collections: collections.map((collection) => collection.data),
    home: home.data,
  };
}

export async function getNavigation() {
  const client = createClient();

  const navigation = await client.getSingle('navigation');

  return navigation.data;
}
