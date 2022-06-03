import { SERVER_URL } from "../constants/variables";
import Resume from '../constants/resume';

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
////
// Helper to make GET requests to Strapi
export async function fetchAPILocal() {
  const data = JSON.stringify(Resume);
  return data;
}