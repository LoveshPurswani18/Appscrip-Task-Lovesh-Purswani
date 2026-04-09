import "./card.css"
import { Product } from "@/types/product"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <div className="image-wrapper">
        <img
          src={product.images?.[0]}
          alt={product.title}
        />
      </div>

      <h3>{product.title}</h3>

      <p className="price">
        Sign in or Create an account to see pricing
      </p>
    </div>
  )
}