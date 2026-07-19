import { useState } from "react";

function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
        className="h-10 w-10 rounded-lg border"
      >
        -
      </button>

      <span className="text-xl font-semibold">
        {quantity}
      </span>

      <button
        onClick={() => setQuantity((q) => q + 1)}
        className="h-10 w-10 rounded-lg border"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;