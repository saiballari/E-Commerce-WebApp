import Button from "../ui/Button";
import { Link } from "react-router-dom";

function EmptyWishlist() {
  return (
    <div className="py-24 text-center">
      <h2 className="text-4xl font-bold text-[#1E3F20]">
        Your Wishlist is Empty
      </h2>

      <p className="mt-4 text-gray-600">
        Save products you love for later.
      </p>

      <Link to="/shop">
        <Button className="mt-8">
          Explore Products
        </Button>
      </Link>
    </div>
  );
}

export default EmptyWishlist;