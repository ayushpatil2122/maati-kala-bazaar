import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, Filter } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import productsImage from '@/assets/clay-products-collection.jpg';

export const products = [
  {
    id: 'decorative-diyas',
    name: 'Decorative Diyas Set',
    price: 120,
    originalPrice: 150,
    rating: 4.8,
    reviews: 156,
    image: productsImage,
    category: 'Festival',
    description: 'Hand-painted clay diyas available in multiple colors (green, orange, pink, blue). Perfect for Diwali and festive décor.',
    variants: ['Set of 4', 'Set of 8', 'Set of 12'],
    colors: ['Multi-color', 'Traditional', 'Modern'],
    inStock: true,
  },
  {
    id: 'clay-feet',
    name: 'Clay Feet (Lakshmi Charan)',
    price: 80,
    originalPrice: 100,
    rating: 4.9,
    reviews: 89,
    image: productsImage,
    category: 'Spiritual',
    description: 'Traditional terracotta Lakshmi feet, used for auspicious occasions and home décor.',
    variants: ['Small', 'Medium'],
    colors: ['Natural', 'Painted'],
    inStock: true,
  },
  {
    id: 'clay-bottle',
    name: 'Hand-painted Clay Bottle',
    price: 250,
    originalPrice: 300,
    rating: 4.7,
    reviews: 124,
    image: productsImage,
    category: 'Kitchenware',
    description: 'Eco-friendly clay water bottle with floral hand-painted designs, keeps water cool naturally.',
    variants: ['1 Litre'],
    colors: ['Floral Blue', 'Floral Red', 'Traditional'],
    inStock: true,
  },
  {
    id: 'terracotta-mugs',
    name: 'Terracotta Mugs & Decorative Items',
    price: 120,
    originalPrice: 160,
    rating: 4.6,
    reviews: 78,
    image: productsImage,
    category: 'Kitchenware',
    description: 'Clay mugs with carved and painted designs. Perfect for tea, coffee, or as gift items.',
    variants: ['Plain', 'Artistic Figurine'],
    colors: ['Natural', 'Painted', 'Carved'],
    inStock: true,
  },
];

const Products = () => {
  const [sortBy, setSortBy] = useState('featured');
  const [filterCategory, setFilterCategory] = useState('all');
  const { addToCart } = useCart();

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => 
    filterCategory === 'all' || product.category === filterCategory
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Clay Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover authentic handcrafted clay products made by skilled Indian artisans
          </p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Select value={filterCategory} onValueChange={setFilterCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <Filter className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sortedProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
              <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-clay-secondary text-white">
                    {product.category}
                  </Badge>
                  {product.originalPrice > product.price && (
                    <Badge className="absolute top-4 right-4 bg-clay-gold text-clay-dark">
                      Sale
                    </Badge>
                  )}
                </div>
              </Link>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-clay-gold text-clay-gold" />
                    <span className="text-sm font-medium">{product.rating}</span>
                    <span className="text-xs text-muted-foreground">({product.reviews})</span>
                  </div>
                  <Badge variant={product.inStock ? "default" : "secondary"}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </Badge>
                </div>
                
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-3 group-hover:text-clay-primary transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </Link>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-clay-primary">
                      ₹{product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button 
                    size="sm" 
                    onClick={() => handleAddToCart(product)}
                    disabled={!product.inStock}
                    className="bg-clay-primary hover:bg-clay-primary/90"
                  >
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
              No products found
            </h3>
            <p className="text-muted-foreground">
              Try adjusting your filters to see more products.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Products;