import Section from "../common/Section";
import ProductGrid from "./ProductGrid";
import products from "../../data/products";

function RelatedProducts() {
  return (
    <Section>
      <div className="mb-12 text-center">
        <p className="uppercase tracking-[0.3em] text-[#D4AF37]">
          You May Also Like
        </p>

        <h2 className="mt-4 text-4xl font-bold text-[#1E3F20]">
          Related Products
        </h2>
      </div>

      <ProductGrid products={products} />
    </Section>
  );
}

export default RelatedProducts;