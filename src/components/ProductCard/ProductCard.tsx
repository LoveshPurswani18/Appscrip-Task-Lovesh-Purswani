import Image from "next/image";
import "./card.css";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

function cleanImageUrl(raw: string | undefined): string | null {
  if (!raw) return null;
  
  let cleaned = raw;
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      cleaned = parsed[0];
    }
  } catch (e) {
    console.log(e);
  }

  cleaned = cleaned.replace(/^\[?"?/, "").replace(/"?\]?$/, "").replace(/\\"/g, "").trim();
  
  if (cleaned.includes("placehold.co") || cleaned.includes("any")) {
    return "https://i.imgur.com/QkIa5tT.jpeg";
  }

  try {
    new URL(cleaned);
    return cleaned;
  } catch {
    return null;
  }
}

export default function ProductCard({ product }: Props) {
  const imageUrl = cleanImageUrl(product.images?.[0]);
  const hasValidImage = Boolean(imageUrl);
  
  const isOutOfStock = product.title.toLowerCase().includes("generic") || product.id === 2;
  const isNewProduct = product.id === 1;

  return (
    <article className="product-card">
      {/* Image area */}
      <div className="card-image-wrapper">
        {hasValidImage ? (
          <Image
            src={imageUrl!}
            alt={product.title}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`card-image ${isOutOfStock ? "out-of-stock-img" : ""}`}
            unoptimized
          />
        ) : (
          <div className="card-image-placeholder" aria-hidden="true">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        )}

        {isNewProduct && (
          <span className="badge-new-product">NEW PRODUCT</span>
        )}
        
        {isOutOfStock && (
          <div className="badge-out-of-stock">OUT OF STOCK</div>
        )}
      </div>

      {/* Card info */}
      <div className="card-footer">
        <div className="card-info">
          <h3 className="card-title">{product.title}</h3>
          <p className="card-price">
            <a href="#" className="signin-link">Sign in</a> or Create an account to see pricing
          </p>
        </div>
        
        <button
          className="card-wishlist-btn"
          aria-label={`Add ${product.title} to wishlist`}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill={product.id % 4 === 0 ? "#eb4335" : "none"}
            stroke={product.id % 4 === 0 ? "#eb4335" : "currentColor"}
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
    </article>
  );
}