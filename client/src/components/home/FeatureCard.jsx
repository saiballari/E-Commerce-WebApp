function FeatureCard({ title, description, icon }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="text-4xl mb-5">{icon}</div>

      <h3 className="text-2xl font-bold text-[#1E3F20]">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;