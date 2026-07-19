import Section from "../common/Section";
import ProductGrid from "../product/ProductGrid";
import products from "../../data/products";

function TrendingProducts() {
  return (
    <Section>
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.3em] text-[#D4AF37]">
          Best Sellers
        </p>

        <h2 className="text-5xl text-[#1E3F20] font-bold mt-4">
          Trending Products
        </h2>
      </div>

      <ProductGrid products={products} />
    </Section>
  );
}

export default TrendingProducts;