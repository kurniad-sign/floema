import Link from 'next/link';
import { PrismicNextImage } from '@prismicio/next';

import { getCollections } from '@/lib/fetch-prismic';

export default async function Collections() {
  const { collections, home } = await getCollections();

  return (
    <div className="collections">
      <div className="collections__̦̦wrapper">
        <div className="collections__titles">
          {collections.map((collection, index) => (
            <>
              <div className="collections__titles__label">
                {home.collections}{' '}
                {index === 0
                  ? 'One'
                  : index === 1
                    ? 'Two'
                    : index === 2
                      ? 'Three'
                      : index === 3
                        ? 'Four'
                        : ''}
              </div>
              <div className="collections__titles__title">
                {collection.title}
              </div>
            </>
          ))}
        </div>

        <div className="collections_gallery">
          <div className="collections__gallery__wrapper">
            {collections.map((col) =>
              col.products.map((product) => (
                <Link
                  key={product.products_product.id}
                  href={'/'}
                  className="collections__gallery__link"
                >
                  <figure className="collections__gallery__media">
                    <PrismicNextImage
                      field={product.products_product.data.product}
                      className="collection__gallery__media__image"
                    />
                  </figure>
                </Link>
              ))
            )}
          </div>
        </div>

        <div className="collections__content">
          {collections.map((col) => (
            <article key={col.title} className="collections__article">
              <h2 className="collections__article__title">
                {col.title} {home.collections}
              </h2>
              <p className="collections__article__description">
                {col.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
