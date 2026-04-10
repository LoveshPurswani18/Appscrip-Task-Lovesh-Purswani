import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"

import Footer from "@/components/Footer/Footer"

import { getProducts } from "@/lib/api"

import Shop from "@/components/Shop/Shop"

export default async function Home() {
  const products = await getProducts()

  const json = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": products.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": p.title,
        "image": p.images?.[0] || "",
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
      />
      <Header />
      <Hero />
      <Shop products={products} />
      <Footer />
    </>
  )
}