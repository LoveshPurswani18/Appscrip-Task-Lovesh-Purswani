import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"
import Toolbar from "@/components/Toolbar/Toolbar"
import Filters from "@/components/Filters/Filters"
import ProductGrid from "@/components/ProductGrid/ProductGrid"
import Footer from "@/components/Footer/Footer"

import { getProducts } from "@/lib/api"

export default async function Home() {
  const products = await getProducts()

  return (
    <>
      <Header />
      <Hero />
      <Toolbar />

      <main className="layout">
        <Filters />
        <ProductGrid products={products} />
      </main>

      <Footer />
    </>
  )
}