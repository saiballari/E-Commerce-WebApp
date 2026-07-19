import { FiHeart, FiShoppingBag, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

function ProductCard({
  image,
  name,
  category,
  price,
  oldPrice,
  rating,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={name}
          className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <span className="absolute top-4 left-4 bg-[#D4AF37] text-white text-xs px-3 py-1 rounded-full">
          NEW
        </span>

        <button className="absolute top-4 right-4 h-10 w-10 rounded-full bg-white shadow flex items-center justify-center">
          <FiHeart />
        </button>

      </div>

      {/* Content */}

      <div className="p-6">

        <p className="text-sm text-gray-500">
          {category}
        </p>

        <h3 className="text-2xl text-[#1E3F20] font-bold mt-2">
          {name}
        </h3>

        <div className="flex items-center gap-1 mt-3">
          <FiStar className="text-yellow-500 fill-yellow-500" />
          <span>{rating}</span>
        </div>

        <div className="flex items-center gap-3 mt-4">

          <span className="text-2xl font-bold text-[#1E3F20]">
            ₹{price}
          </span>

          <span className="line-through text-gray-400">
            ₹{oldPrice}
          </span>

        </div>

        <button className="mt-6 w-full rounded-xl bg-[#1E3F20] text-white py-3 flex items-center justify-center gap-2 hover:bg-[#295229] transition">

          <FiShoppingBag />

          Add to Cart

        </button>

      </div>
    </motion.div>
  );
}

export default ProductCard;