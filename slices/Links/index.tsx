import { Content } from '@prismicio/client';
import { SliceComponentProps } from '@prismicio/react';

/**
 * Props for `Links`.
 */
export type LinksProps = SliceComponentProps<Content.LinksSlice>;

/**
 * Component for "Links" Slices.
 */
const Links = ({ slice }: LinksProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for links (variation: {slice.variation}) Slices
    </section>
  );
};

export default Links;
