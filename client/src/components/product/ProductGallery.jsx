function ProductGallery({ image }) {
  return (
    <div className="rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
      <img
        src={image}
        alt="Product"
        className="w-full h-[600px] object-cover"
      />
    </div>
  );
}

export default ProductGallery;