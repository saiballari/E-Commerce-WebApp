import { motion } from "framer-motion";

function CollectionCard({
  image,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl bg-white shadow-sm hover:shadow-xl transition-all"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-3xl text-[#1E3F20] font-bold">
          {title}
        </h3>

        <p className="mt-3 text-gray-600">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default CollectionCard;