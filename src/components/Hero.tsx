import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-clay-pottery.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Crafted with 
            <span className="text-clay-gold block font-hindi">
              माटी से प्रेम
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Discover authentic Indian clay products handcrafted by traditional artisans. 
            Each piece tells a story of heritage, passion, and timeless craftsmanship.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-white text-clay-primary hover:bg-white/90 font-semibold px-8">
              Shop Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 px-8">
              <Play className="mr-2 w-5 h-5" />
              Watch Artisans at Work
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;