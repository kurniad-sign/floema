import Link from 'next/link';
import { PrismicNextImage } from '@prismicio/next';

import { getHome } from '@/lib/fetch-prismic';

export default async function Home() {
  const { collections, home } = await getHome();

  return (
    <div className="home">
      <div className="home__wrapper">
        <div className="home__titles">
          {collections.map((collection, index) => (
            <>
              <div className="home__titles__label">
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
              <div className="home__titles__title">{collection.title}</div>
            </>
          ))}
        </div>
        <div className="home__gallery">
          {home.gallery.map((gallery) => (
            <figure key={gallery.image.id} className="home__gallery__media">
              <PrismicNextImage
                field={gallery.image}
                className="home__gallery__media__image"
              />
            </figure>
          ))}
        </div>

        <Link href={'/collections'}>{home.button}</Link>
      </div>
    </div>
  );
}
