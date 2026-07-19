import { FiHeart, FiStar } from "react-icons/fi";
import Button from "../ui/Button";
import QuantitySelector from "./QuantitySelector";

function ProductInfo() {
  return (
    <div>

      <p className="text-[#D4AF37] uppercase tracking-[0.25em]">
        Premium Collection
      </p>

      <h1 className="text-5xl font-bold text-[#1E3F20] mt-4">
        Leather Travel Bag
      </h1>

      <div className="flex items-center gap-2 mt-5">
        <FiStar className="fill-yellow-500 text-yellow-500" />
        <span>4.8 (120 Reviews)</span>
      </div>

      <h2 className="text-4xl font-bold mt-6">
        ₹8,999
      </h2>

      <p className="mt-8 text-gray-600 leading-8">
        Crafted from premium leather with timeless elegance for modern travel.
      </p>

      <div className="mt-8">
        <QuantitySelector />
      </div>

      <div className="flex gap-4 mt-10">
        <Button className="flex-1">
          Add to Cart
        </Button>

        <button className="h-14 w-14 rounded-xl border flex items-center justify-center">
          <FiHeart />
        </button>
      </div>

    </div>
  );
}

export default ProductInfo;