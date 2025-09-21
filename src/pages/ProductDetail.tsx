import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Star, ArrowLeft, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';
import { products } from './Products';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [selectedVariant, setSelectedVariant] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const variant = selectedVariant || selectedColor;
    addToCart({
      id: `${product.id}-${variant}`,
      name: `${product.name}${variant ? ` (${variant})` : ''}`,
      price: product.price,
      image: product.image,
      variant,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    toast({
      title: "Redirecting to checkout",
      description: "Payment integration requires Supabase backend setup",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 mt-20">
        {/* Back Button */}
        <Link to="/products" className="inline-flex items-center gap-2 text-clay-primary hover:text-clay-primary/80 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg bg-clay-tertiary">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-4">{product.category}</Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-clay-gold text-clay-gold" />
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                <Badge variant={product.inStock ? "default" : "secondary"}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </Badge>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-clay-primary">
                  ₹{product.price}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      ₹{product.originalPrice}
                    </span>
                    <Badge className="bg-clay-gold text-clay-dark">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </>
                )}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Separator />

            {/* Product Options */}
            <div className="space-y-4">
              {product.variants && product.variants.length > 0 && (
                <div>
                  <label className="text-sm font-medium mb-2 block">Size/Type</label>
                  <Select value={selectedVariant} onValueChange={setSelectedVariant}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size/type" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.variants.map(variant => (
                        <SelectItem key={variant} value={variant}>
                          {variant}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              {product.colors && product.colors.length > 0 && (
                <div>
                  <label className="text-sm font-medium mb-2 block">Color/Design</label>
                  <Select value={selectedColor} onValueChange={setSelectedColor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select color/design" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.colors.map(color => (
                        <SelectItem key={color} value={color}>
                          {color}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              )}

              <div>
                <label className="text-sm font-medium mb-2 block">Quantity</label>
                <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5].map(num => (
                      <SelectItem key={num} value={num.toString()}>
                        {num}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button 
                  onClick={handleBuyNow}
                  disabled={!product.inStock}
                  className="flex-1 bg-clay-primary hover:bg-clay-primary/90"
                  size="lg"
                >
                  Buy Now
                </Button>
                <Button 
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  variant="outline"
                  className="flex-1 border-clay-primary text-clay-primary hover:bg-clay-primary hover:text-white"
                  size="lg"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Heart className="w-4 h-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            <Separator />

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 bg-clay-tertiary rounded-lg">
                <Truck className="w-5 h-5 text-clay-primary" />
                <div>
                  <div className="font-medium text-sm">Free Shipping</div>
                  <div className="text-xs text-muted-foreground">Orders above ₹999</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-clay-tertiary rounded-lg">
                <Shield className="w-5 h-5 text-clay-primary" />
                <div>
                  <div className="font-medium text-sm">Secure Payment</div>
                  <div className="text-xs text-muted-foreground">100% Protected</div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-clay-tertiary rounded-lg">
                <RotateCcw className="w-5 h-5 text-clay-primary" />
                <div>
                  <div className="font-medium text-sm">Easy Returns</div>
                  <div className="text-xs text-muted-foreground">7 Day Policy</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id && p.category === product.category)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Card key={relatedProduct.id} className="group overflow-hidden hover:shadow-lg transition-all">
                  <Link to={`/product/${relatedProduct.id}`}>
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={relatedProduct.image} 
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-2 line-clamp-2">{relatedProduct.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-clay-primary">
                          ₹{relatedProduct.price}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-clay-gold text-clay-gold" />
                          <span className="text-sm">{relatedProduct.rating}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))
            }
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;