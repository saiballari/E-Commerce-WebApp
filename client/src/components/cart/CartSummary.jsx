import Button from "../ui/Button";

function CartSummary() {
  return (
    <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm sticky top-28">

      <h2 className="text-3xl font-bold text-[#1E3F20]">
        Order Summary
      </h2>

      <div className="mt-8 space-y-4">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹8,999</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>

        <div className="border-t pt-4 flex justify-between font-bold text-xl">
          <span>Total</span>
          <span>₹8,999</span>
        </div>

      </div>

      <Button className="mt-8 w-full">
        Proceed to Checkout
      </Button>

    </div>
  );
}

export default CartSummary;