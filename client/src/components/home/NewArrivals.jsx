import Section from "../common/Section";
import ProductGrid from "../product/ProductGrid";
import products from "../../data/products";

function NewArrivals() {
  return (
    <Section className="bg-[#FAF8F3]">
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.3em] text-[#D4AF37]">
          Just Landed
        </p>

        <h2 className="text-5xl font-bold text-[#1E3F20] mt-4">
          New Arrivals
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Explore the newest additions to our curated premium collection.
        </p>
      </div>

      <ProductGrid products={products} />
    </Section>
  );
}

export default NewArrivals;