import Section from "../../components/common/Section";
import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";

function CartPage() {
  return (
    <Section>
      <div className="mb-12">
        <p className="uppercase tracking-[0.3em] text-[#D4AF37]">
          Shopping Cart
        </p>

        <h1 className="mt-4 text-5xl font-bold text-[#1E3F20]">
          Your Cart
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <CartItem />
          <CartItem />
        </div>

        <CartSummary />
      </div>
    </Section>
  );
}

export default CartPage;