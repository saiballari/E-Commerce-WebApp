import Hero from "../../components/home/Hero";
import Collections from "../../components/home/Collections";
import TrendingProducts from "../../components/home/TrendingProducts";
import NewArrivals from "../../components/home/NewArrivals";
import WhyChooseUs from "../../components/home/WhyChooseUs";

function HomePage() {
  return (
    <>
      <Hero />
      <Collections />
      <TrendingProducts />
      <NewArrivals />
      <WhyChooseUs />
    </>
  );
}

export default HomePage;