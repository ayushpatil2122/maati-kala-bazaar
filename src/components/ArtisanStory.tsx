import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Award, Users, Calendar } from "lucide-react";
import artisanImage from "@/assets/artisan-at-work.jpg";

const ArtisanStory = () => {
  return (
    <section id="about" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <Badge className="bg-clay-gold text-clay-dark mb-6">
              Our Heritage
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Stories Shaped by 
              <span className="text-clay-primary font-hindi block">
                हस्तकला की परंपरा
              </span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              For over three generations, our master artisans have been preserving the ancient 
              art of clay crafting. Each piece in our collection carries the soul of Indian 
              heritage and the skilled hands that shaped it with love and dedication.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-clay-primary rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground">50+ Artisans</div>
                  <div className="text-sm text-muted-foreground">Master Craftsmen</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-clay-secondary rounded-full flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground">3 Generations</div>
                  <div className="text-sm text-muted-foreground">Family Tradition</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-clay-warm rounded-full flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground">15 States</div>
                  <div className="text-sm text-muted-foreground">Across India</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-clay-gold rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-foreground">25+ Awards</div>
                  <div className="text-sm text-muted-foreground">Recognition</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-clay-primary hover:bg-clay-primary/90">
                Meet Our Artisans
              </Button>
              <Button variant="outline" size="lg" className="border-clay-primary text-clay-primary hover:bg-clay-primary hover:text-white">
                Our Craft Process
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={artisanImage} 
                alt="Master artisan crafting clay pottery"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-clay-dark/60 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-clay-tertiary">
              <div className="text-2xl font-bold text-clay-primary mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Handcrafted</div>
              <div className="text-sm text-muted-foreground">Authentic Products</div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-clay-gold rounded-full opacity-20"></div>
            <div className="absolute top-1/4 -left-6 w-12 h-12 bg-clay-secondary rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtisanStory;