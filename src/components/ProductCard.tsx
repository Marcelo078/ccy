import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  title: string;
  subtitle: string;
  image: string;
  discount: string;
  price: string;
  installments: string;
  totalPrice: string;
  shipping: string;
  shippingColor?: "green" | "blue";
  link: string;
  featured?: boolean;
}

export const ProductCard = ({
  title,
  subtitle,
  image,
  discount,
  price,
  installments,
  totalPrice,
  shipping,
  shippingColor = "green",
  link,
  featured = false,
}: ProductCardProps) => {
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:scale-105 ${featured ? 'ring-4 ring-accent shadow-2xl' : 'shadow-lg'}`}>
      <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-bold text-lg z-10">
        {discount}
      </div>
      
      <div className="bg-primary text-primary-foreground py-3 px-4 text-center">
        <h3 className="font-bold text-lg">{title}</h3>
      </div>

      <div className="p-6 bg-card">
        <p className="text-center font-bold text-premium text-xl mb-4 italic">
          {subtitle}
        </p>

        <div className="flex justify-center mb-6">
          <img 
            src={image} 
            alt={title}
            className="w-full max-w-[280px] h-auto object-contain"
          />
        </div>

        <div className="space-y-3">
          <p className="text-center text-muted-foreground font-semibold text-sm">
            POR APENAS:
          </p>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">{installments}</p>
            <p className="text-5xl font-bold text-premium mb-1">
              {price}
            </p>
            <p className="text-muted-foreground text-sm">
              {totalPrice}
            </p>
          </div>

          <Button 
            className="w-full text-lg py-6 font-bold shadow-lg hover:shadow-xl transition-all"
            size="lg"
            onClick={() => window.open(link, '_blank')}
          >
            COMPRAR AGORA
          </Button>

          <p className={`text-center font-bold text-lg flex items-center justify-center gap-2 ${shippingColor === 'green' ? 'text-success' : 'text-blue-600'}`}>
            {shipping}
            <span className="text-2xl">🚚</span>
          </p>
        </div>
      </div>
    </Card>
  );
};
