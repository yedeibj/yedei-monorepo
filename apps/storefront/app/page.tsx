import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import CategoryGrid from "@/components/CategoryGrid";
import SubcategoryNav from "@/components/SubcategoryNav";
import SchoolCollection from "@/components/SchoolCollection";
import NewArrivals from "@/components/NewArrivals";
import BestSellers from "@/components/BestSellers";
import BrandStory from "@/components/BrandStory";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <Header />
      <HeroSlider />
      <CategoryGrid />
      <SubcategoryNav />
      <SchoolCollection />
      <NewArrivals />
      <BestSellers />
      <BrandStory />
      <Footer />
    </main>
  );
}
