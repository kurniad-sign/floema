import Link from 'next/link';
import { PrismicNextImage } from '@prismicio/next';

import { getDetail } from '@/lib/fetch-prismic';

export default async function Detail({ params }: { params: { uid: string } }) {
  const detail = await getDetail(params.uid);

  return (
    <div className="detail">
      <div className="detail__wrapper">
        <figure className="detail__media">
          <PrismicNextImage field={detail.product} />
        </figure>
        <div className="detail__information">
          <h1 className="detail__information__title">{detail.title}</h1>
          <div className="detail__information__content">
            <div className="detail__information__highlights"></div>
            {detail.highlight.map((highlight, index) => (
              <p key={index} className="detail__information__highlight">
                <svg className="detail__information__highlight__icon">
                  <use
                    xlinkHref={`sprite-${highlight.highlight_icon.toLowerCase()}`}
                  ></use>
                </svg>
                {highlight.highlight_text}
              </p>
            ))}
            <div className="detail__information__list">
              {detail.information.map((information) => (
                <p
                  key={information.informations_label}
                  className="detail__information__item"
                >
                  <strong className="detail__information__item__title">
                    {information.informations_label}
                  </strong>
                  <span className="detail__information__item__description">
                    {information.informations_description}
                  </span>
                </p>
              ))}
            </div>
            <Link href={'https://google.com'}>{detail.link_text}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
