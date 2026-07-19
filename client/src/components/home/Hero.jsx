import { motion } from "framer-motion";
import Section from "../common/Section";
import Button from "../ui/Button";
import heroImage from "../../assets/images/hero.png";

function Hero() {
  return (
    <Section className="min-h-[85vh] flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="uppercase tracking-[0.35em] text-sm text-[#D4AF37] mb-4">
            Premium Collection
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#1E3F20]">
            Timeless Style
            <br />
            Crafted For
            <br />
            Everyday Luxury
          </h1>

          <p className="mt-8 text-lg text-gray-600 leading-8 max-w-xl">
            Discover thoughtfully curated products designed to bring elegance,
            comfort, and quality into your everyday lifestyle.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>Shop Collection</Button>

            <Button className="bg-white text-[#1E3F20] border border-[#1E3F20] hover:bg-[#1E3F20] hover:text-white">
              Explore
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src={heroImage}
            alt="Luxury Collection"
            className="rounded-3xl shadow-2xl w-full max-w-lg object-cover"
          />
        </motion.div>

      </div>
    </Section>
  );
}

export default Hero;