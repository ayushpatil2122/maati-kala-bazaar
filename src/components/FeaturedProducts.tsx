import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import productsImage from "@/assets/clay-products-collection.jpg";

const products = [
  {
    id: 1,
    name: "Handcrafted Terracotta Vase",
    price: "₹899",
    originalPrice: "₹1,299",
    rating: 4.8,
    reviews: 124,
    image: productsImage,
    category: "Home Decor",
    isNew: true,
  },
  {
    id: 2,
    name: "Traditional Clay Diya Set",
    price: "₹299",
    originalPrice: "₹399",
    rating: 4.9,
    reviews: 89,
    image: productsImage,
    category: "Festival",
    isBestseller: true,
  },
  {
    id: 3,
    name: "Ceramic Tea Cup Set",
    price: "₹1,299",
    originalPrice: "₹1,799",
    rating: 4.7,
    reviews: 156,
    image: productsImage,
    category: "Kitchenware",
  },
  {
    id: 4,
    name: "Decorative Clay Planter",
    price: "₹649",
    originalPrice: "₹849",
    rating: 4.6,
    reviews: 78,
    image: productsImage,
    category: "Garden",
  },
];

const FeaturedProducts = () => {
  return (
    <section id="products" className="py-20 bg-clay-tertiary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Collection
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved clay products, each piece carefully selected for its 
            exceptional craftsmanship and authentic Indian heritage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 bg-background">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && (
                    <Badge className="bg-clay-secondary text-white">New</Badge>
                  )}
                  {product.isBestseller && (
                    <Badge className="bg-clay-gold text-clay-dark">Bestseller</Badge>
                  )}
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {product.category}
                  </Badge>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-clay-gold text-clay-gold" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-3 group-hover:text-clay-primary transition-colors">
                  {product.name}
                </h3>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-clay-primary">
                      {product.price}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                  <Button size="sm" className="bg-clay-primary hover:bg-clay-primary/90">
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-clay-primary text-clay-primary hover:bg-clay-primary hover:text-white">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;