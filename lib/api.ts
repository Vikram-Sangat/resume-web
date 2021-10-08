import { SERVER_URL } from "../constants/variables";

export function getStrapiURL(path = "") {
  const { STRAPI_API_URL = null } = process.env;
  return `${STRAPI_API_URL || SERVER_URL}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
