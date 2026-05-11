import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: "pbkq7mjg",
  dataset: "production",
  apiVersion: "2026-05-11",
  useCdn: false,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source) {
  return builder.image(source);
}

export async function getSanityContent() {
  const query = `{
    "settings": *[_type == "siteSettings"][0],
    "homepage": *[_type == "homepage"][0]
  }`;

  return sanityClient.fetch(query);
}