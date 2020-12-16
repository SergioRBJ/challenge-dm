export interface IGiphy {
  data?: (DataEntity)[] | null;
  pagination: Pagination;
  meta: Meta;
}
export interface DataEntity {
  type: string;
  id: string;
  url: string;
  slug: string;
  bitly_gif_url: string;
  bitly_url: string;
  embed_url: string;
  username: string;
  source: string;
  title: string;
  rating: string;
  content_url: string;
  source_tld: string;
  source_post_url: string;
  is_sticker: number;
  import_datetime: string;
  trending_datetime: string;
  images: any;
  analytics_response_payload: string;
  analytics: Analytics;
  user?: User | null;
}

export interface Original {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
  frames: string;
  hash: string;
}
export interface DownsizedOrDownsizedLargeOrDownsizedMediumOrDownsizedStillOrFixedHeightSmallStillOrFixedHeightStillOrFixedWidthSmallStillOrFixedWidthStillOrOriginalStillOrPreviewGifOrPreviewWebpOr480wStill {
  height: string;
  width: string;
  size: string;
  url: string;
}
export interface DownsizedSmallOrOriginalMp4OrPreviewOrHdOr4k {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}
export interface FixedHeightOrFixedHeightSmallOrFixedWidthOrFixedWidthSmall {
  height: string;
  width: string;
  size: string;
  url: string;
  mp4_size: string;
  mp4: string;
  webp_size: string;
  webp: string;
}
export interface FixedHeightDownsampledOrFixedWidthDownsampled {
  height: string;
  width: string;
  size: string;
  url: string;
  webp_size: string;
  webp: string;
}
export interface Looping {
  mp4_size: string;
  mp4: string;
}
export interface DownsizedSmallOrOriginalMp4OrPreviewOrHdOr4k1 {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}
export interface DownsizedSmallOrOriginalMp4OrPreviewOrHdOr4k2 {
  height: string;
  width: string;
  mp4_size: string;
  mp4: string;
}
export interface Analytics {
  onload: OnloadOrOnclickOrOnsent;
  onclick: OnloadOrOnclickOrOnsent;
  onsent: OnloadOrOnclickOrOnsent;
}
export interface OnloadOrOnclickOrOnsent {
  url: string;
}
export interface User {
  avatar_url: string;
  banner_image: string;
  banner_url: string;
  profile_url: string;
  username: string;
  display_name: string;
  description: string;
  instagram_url: string;
  website_url: string;
  is_verified: boolean;
}
export interface Pagination {
  total_count: number;
  count: number;
  offset: number;
}
export interface Meta {
  status: number;
  msg: string;
  response_id: string;
}
