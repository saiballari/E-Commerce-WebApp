import Button from "../ui/Button";
import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="py-24 text-center">

      <h2 className="text-4xl font-bold text-[#1E3F20]">
        Your Cart is Empty
      </h2>

      <p className="mt-4 text-gray-600">
        Looks like you haven't added any products yet.
      </p>

      <Link to="/shop">
        <Button className="mt-8">
          Continue Shopping
        </Button>
      </Link>

    </div>
  );
}

export default EmptyCart;