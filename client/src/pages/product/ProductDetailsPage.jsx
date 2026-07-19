import Section from "../../components/common/Section";
import ProductGallery from "../../components/product/ProductGallery";
import ProductInfo from "../../components/product/ProductInfo";
import ProductTabs from "../../components/product/ProductTabs";
import RelatedProducts from "../../components/product/RelatedProducts";

import product from "../../assets/images/product1.jpg";

function ProductDetailsPage() {
  return (
    <>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ProductGallery image={product} />
          <ProductInfo />
        </div>

        <ProductTabs />
      </Section>

      <RelatedProducts />
    </>
  );
}

export default ProductDetailsPage;