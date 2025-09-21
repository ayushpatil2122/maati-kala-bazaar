import { Card, CardContent } from "@/components/ui/card";
import { Home, Coffee, Flower, Flame, Gift, Utensils } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Home Decor",
    icon: Home,
    count: "120+ items",
    description: "Beautiful vases, sculptures, and decorative pieces",
    color: "bg-clay-primary",
  },
  {
    id: 2,
    name: "Kitchenware",
    icon: Utensils,
    count: "85+ items",
    description: "Traditional cooking pots, serving dishes, and utensils",
    color: "bg-clay-secondary",
  },
  {
    id: 3,
    name: "Tableware",
    icon: Coffee,
    count: "65+ items",
    description: "Elegant cups, plates, and dining accessories",
    color: "bg-clay-warm",
  },
  {
    id: 4,
    name: "Garden Planters",
    icon: Flower,
    count: "45+ items",
    description: "Artistic planters and garden accessories",
    color: "bg-clay-tertiary",
  },
  {
    id: 5,
    name: "Festival Items",
    icon: Flame,
    count: "35+ items",
    description: "Diyas, rangoli accessories, and ceremonial items",
    color: "bg-clay-gold",
  },
  {
    id: 6,
    name: "Gift Sets",
    icon: Gift,
    count: "25+ items",
    description: "Curated collections perfect for gifting",
    color: "bg-clay-dark",
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse range of clay products, each category representing 
            centuries of Indian craftsmanship and tradition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id} 
                className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-clay-primary"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-clay-primary transition-colors">
                    {category.name}
                  </h3>
                  
                  <p className="text-clay-primary font-semibold mb-3">
                    {category.count}
                  </p>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {category.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;