import { get } from "lodash-es";
import { getStrapiURL } from "./api";

export function getStrapiMedia(media: Record<string, any>) {
  const url = get(media, "url", "");
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return imageUrl;
}
export default getStrapiMedia;
