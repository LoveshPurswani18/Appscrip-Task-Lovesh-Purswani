import Image from "next/image";
import "./card.css";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

/* The API sometimes wraps image URLs in JSON string or array literals.
   This utility extracts a clean URL. */
function cleanImageUrl(raw: string | undefined): string | null {
  if (!raw) return null;
  // strip surrounding quotes / brackets that can appear in the API response
  const cleaned = raw.replace(/^\[?"?/, "").replace(/"?\]?$/, "").trim();
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
            className="card-image"
            unoptimized
          />
        ) : (
          <div className="card-image-placeholder" aria-hidden="true">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        )}

        {/* Wishlist button — overlaid top-right */}
        <button
          className="card-wishlist-btn"
          aria-label={`Add ${product.title} to wishlist`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      {/* Card info */}
      <div className="card-info">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-subtitle">{product.category?.name ?? ""}</p>
        <p className="card-price">
          Sign in or Create an account to see pricing
        </p>
      </div>
    </article>
  );
}