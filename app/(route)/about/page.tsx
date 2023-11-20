import { PrismicNextImage } from '@prismicio/next';
import { PrismicRichText, SliceZone } from '@prismicio/react';

import { getAbout } from '@/lib/fetch-prismic';

export default async function AboutPage() {
  const { body, gallery } = await getAbout();

  return (
    <main>
      <div className="about">
        <div className="about__wrapper">
          <section className="about__gallery">
            <div className="about__gallery__wrapper">
              {gallery.map((media, index) => (
                <figure key={index} className="about__gallery__media">
                  <PrismicNextImage
                    field={media.image}
                    className="about__gallery__media__image"
                  />
                </figure>
              ))}
            </div>
          </section>
        </div>
        <SliceZone
          slices={body}
          components={{
            title: Title,
            content: Content,
            highlight: Highlight,
          }}
        />
      </div>
    </main>
  );
}

function Title({ slice }: { slice: any }) {
  return <h2 className="about__title">{slice.primary.text}</h2>;
}

function Content({ slice }: { slice: any }) {
  return (
    <section className="about__content">
      <div className="about__content__wrapper">
        <p className="about__content__label">{slice.primary.label}</p>
        <div className="about__content__description">
          <PrismicRichText field={slice.primary.description} />
        </div>
        <figure className="about__content__media">
          <PrismicNextImage
            field={slice.primary.image}
            className="about__content__media__image"
          />
        </figure>
      </div>
    </section>
  );
}

function Highlight({ slice }: { slice: any }) {
  return (
    <section className="about__highlight">
      <div className="about__highlight__wrapper">
        {slice.primary.label && (
          <p className="about__content__label">{slice.primary.label}</p>
        )}
        <h3 className="about__highlight__title">{slice.primary.title}</h3>
        {slice.items.map((media: any, index: number) => (
          <figure key={index} className="about__highlight_media">
            <PrismicNextImage
              field={media.image}
              className="about__highlight__media__image"
            />
          </figure>
        ))}
      </div>
    </section>
  );
}
