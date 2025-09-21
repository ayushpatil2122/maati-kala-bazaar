import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  MapPin,
  Phone,
  Mail,
  CreditCard,
  Truck,
  Shield,
  RotateCcw
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-clay-dark text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Connected with Maati Ki Kala</h3>
            <p className="text-white/80 mb-6">
              Get updates on new collections, artisan stories, and exclusive offers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-clay-gold text-clay-dark hover:bg-clay-gold/90 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-clay rounded-full flex items-center justify-center">
                <span className="text-white font-bold">म</span>
              </div>
              <h3 className="text-xl font-bold font-hindi">Maati Ki Kala</h3>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Preserving the authentic art of Indian clay craftsmanship, 
              connecting you with traditional artisans and their timeless creations.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-clay-gold hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-clay-gold hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-clay-gold hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white/60 hover:text-clay-gold hover:bg-white/10">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Products', 'Categories', 'About Us', 'Artisan Stories', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/80 hover:text-clay-gold transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Categories</h4>
            <ul className="space-y-3">
              {['Home Decor', 'Kitchenware', 'Tableware', 'Garden Planters', 'Festival Items', 'Gift Sets'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-white/80 hover:text-clay-gold transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-clay-gold mt-1 flex-shrink-0" />
                <p className="text-white/80 text-sm">
                  123 Pottery Lane, Artisan Quarter<br />
                  New Delhi, India 110001
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-clay-gold flex-shrink-0" />
                <p className="text-white/80 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-clay-gold flex-shrink-0" />
                <p className="text-white/80 text-sm">hello@maatikikala.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-clay-gold" />
              <div>
                <div className="font-semibold text-sm">Free Shipping</div>
                <div className="text-xs text-white/60">Orders above ₹999</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="w-6 h-6 text-clay-gold" />
              <div>
                <div className="font-semibold text-sm">Secure Payment</div>
                <div className="text-xs text-white/60">SSL Protected</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <RotateCcw className="w-6 h-6 text-clay-gold" />
              <div>
                <div className="font-semibold text-sm">Easy Returns</div>
                <div className="text-xs text-white/60">7 Day Policy</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreditCard className="w-6 h-6 text-clay-gold" />
              <div>
                <div className="font-semibold text-sm">Multiple Payment</div>
                <div className="text-xs text-white/60">Options Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 Maati Ki Kala. All rights reserved. Made with ❤️ for Indian artisans.
            </p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-clay-gold text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-clay-gold text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-white/60 hover:text-clay-gold text-sm transition-colors">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;