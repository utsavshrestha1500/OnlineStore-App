// sitemap.ts

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { SanityProduct } from "@/config/inventory";

export async function generateSitemap() {
  const baseUrl = "https://www.mystore.com";

  const product = await client.fetch<SanityProduct[]>(groq`*[_type == "product"]`);

  const productUrls = product.map((params) => ({
    url: `${baseUrl}/product/${params.slug}`,
    lastModified: params._createdAt, // Use the actual last modified date of the product
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/product`, lastModified: new Date() },
    ...productUrls,
  ];
}
