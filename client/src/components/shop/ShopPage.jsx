import Section from "../../components/common/Section";
import ShopHeader from "../../components/shop/ShopHeader";
import ShopToolbar from "../../components/shop/ShopToolbar";
import ProductGrid from "../../components/product/ProductGrid";

import products from "../../data/products";

function ShopPage() {
  return (
    <>
      <ShopHeader />

      <Section className="pt-0">
        <ShopToolbar />

        <ProductGrid products={products} />
      </Section>
    </>
  );
}

export default ShopPage;