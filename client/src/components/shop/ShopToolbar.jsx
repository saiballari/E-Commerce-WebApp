function ShopToolbar() {
  return (
    <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      <input
        type="text"
        placeholder="Search products..."
        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-[#D4AF37]"
      />

      <div className="flex gap-4">

        <select className="rounded-xl border border-gray-300 px-4 py-3">
          <option>All Categories</option>
        </select>

        <select className="rounded-xl border border-gray-300 px-4 py-3">
          <option>Latest</option>
          <option>Price Low → High</option>
          <option>Price High → Low</option>
        </select>

      </div>

    </div>
  );
}

export default ShopToolbar;