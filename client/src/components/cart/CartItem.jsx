import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";

function CartItem() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">

      <img
        src="/placeholder.png"
        alt="Product"
        className="h-32 w-32 rounded-2xl object-cover bg-gray-100"
      />

      <div className="flex-1">
        <h3 className="text-2xl font-bold text-[#1E3F20]">
          Leather Travel Bag
        </h3>

        <p className="mt-2 text-gray-500">
          Accessories
        </p>

        <p className="mt-4 text-2xl font-bold">
          ₹8,999
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-lg border p-2">
          <FiMinus />
        </button>

        <span className="text-lg font-semibold">
          1
        </span>

        <button className="rounded-lg border p-2">
          <FiPlus />
        </button>
      </div>

      <button className="rounded-xl border p-3 text-red-600 hover:bg-red-50">
        <FiTrash2 />
      </button>

    </div>
  );
}

export default CartItem;