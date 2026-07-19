import { FiTruck, FiShield, FiRefreshCw } from "react-icons/fi";
import Section from "../common/Section";
import FeatureCard from "./FeatureCard";

function WhyChooseUs() {
  return (
    <Section>
      <div className="text-center mb-16">
        <p className="uppercase tracking-[0.3em] text-[#D4AF37]">
          Our Promise
        </p>

        <h2 className="text-5xl font-bold text-[#1E3F20] mt-4">
          Why Choose NovaCart
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <FeatureCard
          icon={<FiTruck />}
          title="Free Shipping"
          description="Complimentary delivery on eligible orders."
        />

        <FeatureCard
          icon={<FiShield />}
          title="Secure Payments"
          description="Protected checkout with trusted payment methods."
        />

        <FeatureCard
          icon={<FiRefreshCw />}
          title="Easy Returns"
          description="Simple return policy for a worry-free experience."
        />
      </div>
    </Section>
  );
}

export default WhyChooseUs;