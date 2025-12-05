import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ShoppingCart } from "lucide-react";
import productsImage from "@/assets/clay-products-collection.jpg";
import { useCart } from '@/hooks/useCart';
export const products = [
  {
    id: 'mud-diyas',
    name: 'Mud Diyas Set',
    price: "80₹",
    rating: 4.8,
    reviews: 156,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/10/353190764/PR/SL/EK/162069620/traditional-3-inch-9-clay-diya-set-1000x1000.jpg",
    category: 'Festival',
    description: 'Hand-painted mud diyas available in multiple colors (green, orange, pink, blue). Perfect for Diwali and festive décor.',
    variants: ['Set of 4', 'Set of 8', 'Set of 12'],
    colors: ['Multi-color', 'Traditional', 'Modern'],
    inStock: true,
  },
  {
    id: 'charan-paduka',
    name: 'Clay Feet (Charan Paduka)',
    price: "40₹",
    rating: 4.9,
    reviews: 89,
    image: "https://i.etsystatic.com/24129554/r/il/b681fe/4146536274/il_794xN.4146536274_6lwv.jpg",
    category: 'Spiritual',
    description: 'Traditional terracotta Lakshmi feet, used for auspicious occasions and home décor.',
    variants: ['Small', 'Medium'],
    colors: ['Natural', 'Painted'],
    inStock: true,
  },
  {
    id: 'mud-bottle',
    name: 'Hand-painted Mud Bottle',
    price: "279₹",
    rating: 4.7,
    reviews: 124,
    image: "https://priyatandoncraft.com/cdn/shop/files/59.png?v=1697085217&width=990",
    category: 'Kitchenware',
    description: 'Eco-friendly mud water bottle with floral hand-painted designs, keeps water cool naturally.',
    variants: ['1 Litre'],
    colors: ['Floral Blue', 'Floral Red', 'Traditional'],
    inStock: true,
  },
  {
    id: 'Clay cups',
    name: 'Hand made clay cups',
    price: "140₹",
    rating: 4.6,
    reviews: 78,
    image:"https://cdn.shopify.com/s/files/1/0566/5665/8476/products/Copyof1_0005_DSC06436-279107_1946x.jpg?v=1678192342",
    category: 'Kitchenware',
    description: 'Clay cups with carved and painted designs. Perfect for tea, coffee, or as gift items.',
    variants: ['Plain', 'Artistic Figurine'],
    colors: ['Natural', 'Painted', 'Carved'],
    inStock: true,
  },
];

const FeaturedProducts = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: parseFloat(product.price),
      image: product.image,
    });
  };
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
                  <Button onClick={() => handleAddToCart(product)} size="sm" className="bg-clay-primary hover:bg-clay-primary/90">
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-clay-primary text-clay-primary hover:bg-clay-primary hover:text-white" asChild>
            <Link to="/products">View All Products</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;