export function getStrapiURL(path = "") {
  const { STRAPI_API_URL = null } = process.env;
  return `${STRAPI_API_URL || "http://localhost:1337"}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path: string) {
  const requestUrl = getStrapiURL(path);
  console.log("requestUrl", requestUrl);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}
