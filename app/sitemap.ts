import { product } from './../sanity/schemas/product-schema';
// sitemap.ts

import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import { SanityProduct } from "@/config/inventory";

export async function generateSitemap() {
  const baseUrl = "https://www.mystore.com";

  const products = await client.fetch<SanityProduct[]>(groq`*[_type == "product"]`);

  const productUrls = products.map((product) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: product._createdAt, // Use the actual last modified date of the product
  }));

  const sitemap = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/product`, lastModified: new Date() },
    ...productUrls,
  ];

  return sitemap;
}

export default generateSitemap; 
