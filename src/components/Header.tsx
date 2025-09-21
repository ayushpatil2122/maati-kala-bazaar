import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import CartSheet from "./CartSheet";
import { useCart } from "@/hooks/useCart";

const Header = () => {
  const { totalItems } = useCart();
  
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-clay rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">म</span>
            </div>
            <h1 className="text-xl font-bold text-foreground font-hindi">
              Maati Ki Kala
            </h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-clay-primary transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-foreground hover:text-clay-primary transition-colors">
              Products
            </Link>
            <a href="#categories" className="text-foreground hover:text-clay-primary transition-colors">
              Categories
            </a>
            <a href="#about" className="text-foreground hover:text-clay-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-clay-primary transition-colors">
              Contact
            </a>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search clay products..." 
                className="pl-10 w-64"
              />
            </div>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <CartSheet>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-1 -right-1 bg-clay-primary text-white text-xs w-5 h-5 flex items-center justify-center p-0">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </CartSheet>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;