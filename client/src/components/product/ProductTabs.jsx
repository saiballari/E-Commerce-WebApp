import { useState } from "react";

const tabs = ["Description", "Specifications", "Reviews"];

function ProductTabs() {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div className="mt-20">
      <div className="flex flex-wrap gap-4 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-3 text-lg font-medium transition ${
              activeTab === tab
                ? "border-b-2 border-[#D4AF37] text-[#1E3F20]"
                : "text-gray-500 hover:text-[#1E3F20]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="mt-8 text-gray-600 leading-8">
        {activeTab === "Description" && (
          <p>
            Crafted with premium materials and designed for everyday elegance.
            This product combines durability, comfort, and timeless style.
          </p>
        )}

        {activeTab === "Specifications" && (
          <ul className="list-disc pl-6 space-y-2">
            <li>Premium Quality Material</li>
            <li>Lightweight Design</li>
            <li>Elegant Finish</li>
            <li>1 Year Warranty</li>
          </ul>
        )}

        {activeTab === "Reviews" && (
          <p>
            ⭐ 4.8 / 5 based on 120 verified customer reviews.
          </p>
        )}
      </div>
    </div>
  );
}

export default ProductTabs;