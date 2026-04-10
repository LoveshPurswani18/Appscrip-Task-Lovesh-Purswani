import "./grid.css";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "@/types/product";

interface Props {
  products: Product[];
  isFilterVisible: boolean;
}

export default function ProductGrid({ products, isFilterVisible }: Props) {
  return (
    <section 
      className={`product-grid ${isFilterVisible ? "grid-3-cols" : "grid-4-cols"}`} 
      aria-label="Product listing"
    >
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}