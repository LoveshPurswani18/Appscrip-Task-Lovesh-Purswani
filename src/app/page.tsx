import Header from "@/components/Header/Header"
import Hero from "@/components/Hero/Hero"

import Footer from "@/components/Footer/Footer"

import { getProducts } from "@/lib/api"

import Shop from "@/components/Shop/Shop"

export default async function Home() {
  const products = await getProducts()

  return (
    <>
      <Header />
      <Hero />
      <Shop products={products} />
      <Footer />
    </>
  )
}