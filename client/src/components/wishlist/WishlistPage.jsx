import Section from "../../components/common/Section";
import WishlistItem from "../../components/wishlist/WishlistItem";

function WishlistPage() {
  return (
    <Section>
      <div className="mb-12">
        <p className="uppercase tracking-[0.3em] text-[#D4AF37]">
          Saved Items
        </p>

        <h1 className="mt-4 text-5xl font-bold text-[#1E3F20]">
          Your Wishlist
        </h1>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <WishlistItem />
        <WishlistItem />
        <WishlistItem />
      </div>
    </Section>
  );
}

export default WishlistPage;