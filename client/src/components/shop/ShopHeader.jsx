import Section from "../common/Section";

function ShopHeader() {
  return (
    <Section className="pb-8">
      <div className="text-center">
        <p className="uppercase tracking-[0.3em] text-[#D4AF37]">
          Discover
        </p>

        <h1 className="mt-4 text-5xl font-bold text-[#1E3F20]">
          Shop Collection
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Browse our premium collection curated with elegance and timeless
          craftsmanship.
        </p>
      </div>
    </Section>
  );
}

export default ShopHeader;