import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Plus, Minus, Trash2, MessageCircle } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';

interface CartSheetProps {
  children: React.ReactNode;
}

const CartSheet = ({ children }: CartSheetProps) => {
  const { items, updateQuantity, removeFromCart, totalItems, totalPrice, clearCart } = useCart();
  const { toast } = useToast();

  // Replace with your actual WhatsApp business number (with country code, without +)
  const WHATSAPP_NUMBER = "918770631586"; // Example: Indian number format

  const formatWhatsAppMessage = () => {
    let message = "*🛒 New Order from Clay Store*\n\n";
    message += "*📦 Order Details:*\n";
    
    items.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      if (item.variant) {
        message += `   Variant: ${item.variant}\n`;
      }
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ₹${item.price} each\n`;
      message += `   Subtotal: ₹${item.price * item.quantity}\n\n`;
    });

    const shippingCost = totalPrice >= 999 ? 0 : 50;
    const finalTotal = totalPrice + shippingCost;

    message += "*💰 Payment Summary:*\n";
    message += `Subtotal: ₹${totalPrice}\n`;
    message += `Shipping: ${shippingCost === 0 ? 'Free' : `₹${shippingCost}`}\n`;
    message += `*Total: ₹${finalTotal}*\n\n`;

    message += "*📞 Please confirm this order and provide:*\n";
    message += "• Delivery address\n";
    message += "• Preferred delivery time\n";
    message += "• Any special instructions\n\n";
    
    message += "Thank you for choosing our clay products! 🏺";

    return encodeURIComponent(message);
  };

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checkout",
        variant: "destructive"
      });
      return;
    }

    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    
    // Open WhatsApp in a new tab/window
    window.open(whatsappUrl, '_blank');

    // Clear the cart after successful order initiation
    clearCart();

    toast({
      title: "Order sent successfully!",
      description: "Your cart has been cleared and order details sent to WhatsApp. Complete your order there!",
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5" />
            Shopping Cart
            {totalItems > 0 && (
              <Badge variant="secondary">{totalItems}</Badge>
            )}
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <ShoppingCart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground">Add some beautiful clay products to get started!</p>
              </div>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto py-4">
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={`${item.id}-${item.variant}`} className="flex gap-3 p-3 border rounded-lg">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm line-clamp-2">{item.name}</h4>
                        {item.variant && (
                          <p className="text-xs text-muted-foreground">{item.variant}</p>
                        )}
                        <div className="flex items-center justify-between mt-2">
                          <span className="font-bold text-clay-primary">₹{item.price}</span>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-6 h-6"
                              onClick={() => updateQuantity(`${item.id}-${item.variant}`, item.quantity - 1)}
                            >
                              <Minus className="w-3 h-3" />
                            </Button>
                            <span className="text-sm font-medium w-6 text-center">{item.quantity}</span>
                            <Button
                              variant="outline"
                              size="icon"
                              className="w-6 h-6"
                              onClick={() => updateQuantity(`${item.id}-${item.variant}`, item.quantity + 1)}
                            >
                              <Plus className="w-3 h-3" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="w-6 h-6 text-destructive"
                              onClick={() => removeFromCart(`${item.id}-${item.variant}`)}
                            >
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Subtotal</span>
                    <span className="font-semibold">₹{totalPrice}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Shipping</span>
                    <span className="text-sm text-green-600">
                      {totalPrice >= 999 ? 'Free' : '₹50'}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">Total</span>
                    <span className="font-bold text-lg text-clay-primary">
                      ₹{totalPrice >= 999 ? totalPrice : totalPrice + 50}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mt-4">
                  <Button 
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    size="lg"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Order via WhatsApp
                  </Button>
                  <Button 
                    onClick={clearCart}
                    variant="outline"
                    className="w-full"
                    size="sm"
                  >
                    Clear Cart
                  </Button>
                </div>

                {totalPrice < 999 && (
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    Add ₹{999 - totalPrice} more for free shipping!
                  </p>
                )}
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;