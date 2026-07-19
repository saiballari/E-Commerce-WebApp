import ProductCard from "./ProductCard";

function ProductGrid({ products = [] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          category={product.category}
          price={product.price}
          oldPrice={product.oldPrice}
          rating={product.rating}
        />
      ))}
    </div>
  );
}

export default ProductGrid;