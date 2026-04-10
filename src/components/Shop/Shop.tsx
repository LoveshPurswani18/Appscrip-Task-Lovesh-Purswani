"use client";

import { useState } from "react";
import Toolbar from "@/components/Toolbar/Toolbar";
import Filters from "@/components/Filters/Filters";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import { Product } from "@/types/product";

interface Props {
  products: Product[];
}

export default function Shop({ products }: Props) {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  return (
    <>
      <Toolbar
        isFilterVisible={isFilterVisible}
        toggleFilter={() => setIsFilterVisible((prev) => !prev)}
      />
      <main className={`layout ${isFilterVisible ? "filter-visible" : "filter-hidden"}`}>
        <Filters isVisible={isFilterVisible} onClose={() => setIsFilterVisible(false)} />
        <ProductGrid products={products} isFilterVisible={isFilterVisible} />
      </main>
    </>
  );
}
