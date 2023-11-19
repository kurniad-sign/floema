// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicClient from '@prismicio/client';
import type * as prismic from '@prismicio/types';

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *About → Gallery*
 */
export interface AboutDocumentDataGalleryItem {
  /**
   * image field in *About → Gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.gallery[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Primary content in *About → Slice zone → Title → Primary*
 */
export interface AboutDocumentDataBodyTitleSlicePrimary {
  /**
   * Text field in *About → Slice zone → Title → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].title.primary.text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Slice for *About → Slice zone*
 */
export type AboutDocumentDataBodyTitleSlice = prismic.Slice<
  'title',
  Simplify<AboutDocumentDataBodyTitleSlicePrimary>,
  never
>;

/**
 * Primary content in *About → Slice zone → Content → Primary*
 */
export interface AboutDocumentDataBodyContentSlicePrimary {
  /**
   * Label field in *About → Slice zone → Content → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].content.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Description field in *About → Slice zone → Content → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].content.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *About → Slice zone → Content → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].content.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Type field in *About → Slice zone → Content → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Left
   * - **API ID Path**: about.body[].content.primary.type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  type: prismic.SelectField<'Left' | 'Right', 'filled'>;
}

/**
 * Slice for *About → Slice zone*
 */
export type AboutDocumentDataBodyContentSlice = prismic.Slice<
  'content',
  Simplify<AboutDocumentDataBodyContentSlicePrimary>,
  never
>;

/**
 * Primary content in *About → Slice zone → Highlight → Primary*
 */
export interface AboutDocumentDataBodyHighlightSlicePrimary {
  /**
   * Label field in *About → Slice zone → Highlight → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].highlight.primary.label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Title field in *About → Slice zone → Highlight → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].highlight.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Item content in *About → Slice zone → Highlight → Items*
 */
export interface AboutDocumentDataBodyHighlightSliceItem {
  /**
   * image field in *About → Slice zone → Highlight → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].highlight.items.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Slice for *About → Slice zone*
 */
export type AboutDocumentDataBodyHighlightSlice = prismic.Slice<
  'highlight',
  Simplify<AboutDocumentDataBodyHighlightSlicePrimary>,
  Simplify<AboutDocumentDataBodyHighlightSliceItem>
>;

/**
 * Item content in *About → Slice zone → Gallery → Items*
 */
export interface AboutDocumentDataBodyGallerySliceItem {
  /**
   * Image field in *About → Slice zone → Gallery → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[].gallery.items.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Slice for *About → Slice zone*
 */
export type AboutDocumentDataBodyGallerySlice = prismic.Slice<
  'gallery',
  Record<string, never>,
  Simplify<AboutDocumentDataBodyGallerySliceItem>
>;

type AboutDocumentDataBodySlice =
  | AboutDocumentDataBodyTitleSlice
  | AboutDocumentDataBodyContentSlice
  | AboutDocumentDataBodyHighlightSlice
  | AboutDocumentDataBodyGallerySlice;

/**
 * Content for About documents
 */
interface AboutDocumentData {
  /**
   * Gallery field in *About*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about.gallery[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  gallery: prismic.GroupField<Simplify<AboutDocumentDataGalleryItem>>;

  /**
   * Slice zone field in *About*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: about.body[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  body: prismic.SliceZone<AboutDocumentDataBodySlice>;
}

/**
 * About document from Prismic
 *
 * - **API ID**: `about`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type AboutDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<AboutDocumentData>, 'about', Lang>;

/**
 * Item in *Collection → Products*
 */
export interface ColDocumentDataProductsItem {
  /**
   * Products field in *Collection → Products*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: col.products[].products_product
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  products_product: prismic.ContentRelationshipField<'produ'>;
}

/**
 * Content for Collection documents
 */
interface ColDocumentData {
  /**
   * Title field in *Collection*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: col.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Collection*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: col.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Products field in *Collection*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: col.products[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  products: prismic.GroupField<Simplify<ColDocumentDataProductsItem>>;
}

/**
 * Collection document from Prismic
 *
 * - **API ID**: `col`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ColDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ColDocumentData>, 'col', Lang>;

interface CollectionsDocumentData {}

/**
 * Collections document from Prismic
 *
 * - **API ID**: `collections`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CollectionsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CollectionsDocumentData>,
    'collections',
    Lang
  >;

/**
 * Item in *Home → Gallery*
 */
export interface HDocumentDataGalleryItem {
  /**
   * Image field in *Home → Gallery*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: h.gallery[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Content for Home documents
 */
interface HDocumentData {
  /**
   * Gallery field in *Home*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: h.gallery[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  gallery: prismic.GroupField<Simplify<HDocumentDataGalleryItem>>;

  /**
   * Collections field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: h.collections
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  collections: prismic.KeyTextField;

  /**
   * Collection field in *Home*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: h.collection
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  collection: prismic.ContentRelationshipField<'collections'>;

  /**
   * Button field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: h.button
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `h`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HDocumentData>, 'h', Lang>;

/**
 * Content for Metadata documents
 */
interface MetadataDocumentData {
  /**
   * Title field in *Metadata*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: metadata.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Metadata*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: metadata.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * Image field in *Metadata*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: metadata.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Metadata document from Prismic
 *
 * - **API ID**: `metadata`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MetadataDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MetadataDocumentData>,
    'metadata',
    Lang
  >;

/**
 * Item in *Navigation → List*
 */
export interface NavigationDocumentDataListItem {
  /**
   * Link field in *Navigation → List*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.list[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.ContentRelationshipField;

  /**
   * Text field in *Navigation → List*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.list[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;
}

/**
 * Content for Navigation documents
 */
interface NavigationDocumentData {
  /**
   * List field in *Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: navigation.list[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  list: prismic.GroupField<Simplify<NavigationDocumentDataListItem>>;
}

/**
 * Navigation document from Prismic
 *
 * - **API ID**: `navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type NavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<NavigationDocumentData>,
    'navigation',
    Lang
  >;

/**
 * Content for preloader documents
 */
interface PreloaderDocumentData {
  /**
   * Title field in *preloader*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: preloader.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * preloader document from Prismic
 *
 * - **API ID**: `preloader`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PreloaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<PreloaderDocumentData>,
    'preloader',
    Lang
  >;

/**
 * Item in *Product → Highlight*
 */
export interface ProduDocumentDataHighlightItem {
  /**
   * Icon field in *Product → Highlight*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: Arrow
   * - **API ID Path**: produ.highlight[].highlight_icon
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  highlight_icon: prismic.SelectField<'Arrow' | 'Star', 'filled'>;

  /**
   * Text field in *Product → Highlight*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: produ.highlight[].highlight_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  highlight_text: prismic.KeyTextField;
}

/**
 * Item in *Product → Information*
 */
export interface ProduDocumentDataInformationItem {
  /**
   * Label field in *Product → Information*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: produ.information[].informations_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  informations_label: prismic.KeyTextField;

  /**
   * Description field in *Product → Information*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: produ.information[].informations_description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  informations_description: prismic.KeyTextField;
}

/**
 * Content for Product documents
 */
interface ProduDocumentData {
  /**
   * Collection field in *Product*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: produ.collection
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  collection: prismic.ContentRelationshipField<'col'>;

  /**
   * Title field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: produ.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Product field in *Product*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: produ.product
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  product: prismic.ImageField<never>;

  /**
   * Model field in *Product*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: produ.model
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  model: prismic.ImageField<never>;

  /**
   * Highlight field in *Product*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: produ.highlight[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  highlight: prismic.GroupField<Simplify<ProduDocumentDataHighlightItem>>;

  /**
   * Information field in *Product*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: produ.information[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  information: prismic.GroupField<Simplify<ProduDocumentDataInformationItem>>;

  /**
   * Shop it field in *Product*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: produ.link_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_text: prismic.KeyTextField;

  /**
   * Shop It - Link field in *Product*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: produ.link_url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_url: prismic.LinkField;
}

/**
 * Product document from Prismic
 *
 * - **API ID**: `produ`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProduDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<ProduDocumentData>, 'produ', Lang>;

export type AllDocumentTypes =
  | AboutDocument
  | ColDocument
  | CollectionsDocument
  | HDocument
  | MetadataDocument
  | NavigationDocument
  | PreloaderDocument
  | ProduDocument;

declare module '@prismicio/client' {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismicClient.ClientConfig
    ): prismicClient.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      AboutDocument,
      AboutDocumentData,
      AboutDocumentDataGalleryItem,
      AboutDocumentDataBodyTitleSlicePrimary,
      AboutDocumentDataBodyContentSlicePrimary,
      AboutDocumentDataBodyHighlightSlicePrimary,
      AboutDocumentDataBodyHighlightSliceItem,
      AboutDocumentDataBodyGallerySliceItem,
      AboutDocumentDataBodySlice,
      ColDocument,
      ColDocumentData,
      ColDocumentDataProductsItem,
      CollectionsDocument,
      CollectionsDocumentData,
      HDocument,
      HDocumentData,
      HDocumentDataGalleryItem,
      MetadataDocument,
      MetadataDocumentData,
      NavigationDocument,
      NavigationDocumentData,
      NavigationDocumentDataListItem,
      PreloaderDocument,
      PreloaderDocumentData,
      ProduDocument,
      ProduDocumentData,
      ProduDocumentDataHighlightItem,
      ProduDocumentDataInformationItem,
      AllDocumentTypes,
    };
  }
}
