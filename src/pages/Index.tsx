import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import Categories from "@/components/Categories";
import ArtisanStory from "@/components/ArtisanStory";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedProducts />
      {/* <Categories /> */}
      <ArtisanStory />
      <Footer />
    </div>
  );
};

export default Index;
