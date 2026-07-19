import Section from "../common/Section";
import CollectionCard from "./CollectionCard";

import men from "../../assets/images/men.jpg";
import women from "../../assets/images/women.jpg";
import accessories from "../../assets/images/accessories.jpg";

function Collections() {
  return (
    <Section>
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.3em] text-[#D4AF37]">
          Curated Categories
        </p>

        <h2 className="text-5xl text-[#1E3F20] font-bold mt-4">
          Shop by Collection
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <CollectionCard
          image={men}
          title="Men"
          description="Elegant essentials for the modern gentleman."
        />

        <CollectionCard
          image={women}
          title="Women"
          description="Luxury fashion curated with timeless elegance."
        />

        <CollectionCard
          image={accessories}
          title="Accessories"
          description="Complete your look with premium accessories."
        />
      </div>
    </Section>
  );
}

export default Collections;