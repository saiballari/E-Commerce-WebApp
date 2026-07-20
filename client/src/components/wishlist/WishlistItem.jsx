import ProductCard from "../product/ProductCard";
import product from "../../assets/images/product1.jpg";

function WishlistItem() {
  return (
    <ProductCard
      image={product}
      name="Leather Travel Bag"
      category="Accessories"
      price={8999}
      oldPrice={10999}
      rating={4.8}
    />
  );
}

export default WishlistItem;