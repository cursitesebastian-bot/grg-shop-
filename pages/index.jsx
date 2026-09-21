import Hero from "@/components/hero";
import CategorySection from "@/components/item";
import SportsCards from "@/components/sportscard";
import Collection from "@/components/collection";
import Footer from "@/components/footer";
import Decor from "@/components/demo"

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <SportsCards />
      <Collection />
      <Decor/>
      <Footer />
    </>
  );
}