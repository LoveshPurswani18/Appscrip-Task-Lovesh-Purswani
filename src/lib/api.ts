import { Product } from "../types/product"

export async function getProducts(): Promise<Product[]> {
  const res = await fetch(
    "https://api.escuelajs.co/api/v1/products?offset=0&limit=24",
    {
      cache: "no-store",
    }
  )

  if (!res.ok) {
    throw new Error("Failed to fetch products")
  }

  return res.json()
}