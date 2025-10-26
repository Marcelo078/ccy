import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ProductCard";
import { BenefitCard } from "@/components/BenefitCard";
import { FAQ } from "@/components/FAQ";
import heroImage from "@/assets/ccy-gotas-hero.png";
import kit1Mes from "@/assets/kit-1-mes.png";
import kit3Meses from "@/assets/kit-3-meses.png";
import kit5Meses from "@/assets/kit-5-meses.png";
import kit12Meses from "@/assets/kit-12-meses.png";

const Index = () => {
  useEffect(() => {
    // Schema.org JSON-LD for Product
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "CCY Gotas - Suplemento Alimentar Líquido",
      "image": heroImage,
      "description": "Suplemento em gotas com fórmula premium. Auxilia no emagrecimento, controle de apetite e manutenção articular com colágeno tipo II.",
      "brand": {
        "@type": "Brand",
        "name": "CCY Gotas"
      },
      "offers": {
        "@type": "AggregateOffer",
        "lowPrice": "19.78",
        "highPrice": "69.98",
        "priceCurrency": "BRL",
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "1247"
      }
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const scrollToOffers = () => {
    document.getElementById('ofertas')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-background to-muted/20 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
              Garanta seu CCY Gotas Original!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Até <span className="text-accent font-bold">60% OFF</span> nas Últimas Ofertas
            </p>
            <p className="text-lg text-muted-foreground">
              🔒 Compra 100% Segura • ✓ Entrega Garantida • 📦 Frete Grátis*
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <img 
              src={heroImage} 
              alt="CCY Gotas - Suplemento Alimentar Líquido com Fórmula Premium"
              className="w-full max-w-lg h-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="text-xl py-7 px-12 font-bold shadow-2xl hover:shadow-xl transition-all animate-pulse"
              onClick={scrollToOffers}
            >
              👉 COMPRAR AGORA COM DESCONTO
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              ⏰ Últimas unidades • 🔥 Oferta por tempo limitado
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Como CCY Gotas Vai Te Ajudar?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard 
              icon="🔥"
              title="Acelera o metabolismo"
              description="Ativa processos naturais do corpo para queimar gordura de forma mais eficiente"
            />
            <BenefitCard 
              icon="🍽️"
              title="Reduz o apetite"
              description="Diminui a sensação de fome, facilitando o controle alimentar"
            />
            <BenefitCard 
              icon="💪"
              title="Manutenção articular"
              description="Colágeno tipo II auxilia na saúde das articulações"
            />
            <BenefitCard 
              icon="✨"
              title="Fórmula líquida"
              description="Melhor absorção dos nutrientes em formato de gotas"
            />
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="ofertas" className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
            🔥 ÚLTIMAS OFERTAS 🔥
          </h2>
          <p className="text-center text-xl text-muted-foreground mb-12">
            Escolha o melhor kit para você e comece sua transformação hoje!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard 
              title="KIT PARA 12 MESES"
              subtitle="O MAIS VENDIDO! PAGUE 6 E LEVE 12"
              image={kit12Meses}
              discount="60% de desconto"
              price="69,98"
              installments="12X DE"
              totalPrice="OU R$ 697,00 à vista com desconto"
              shipping="FRETE GRÁTIS"
              shippingColor="green"
              link="https://app.monetizze.com.br/r/AJB21485231?u=c&pl=PR181957"
              featured={true}
            />
            
            <ProductCard 
              title="KIT PARA 5 MESES"
              subtitle="PAGUE 3 E LEVE 5!"
              image={kit5Meses}
              discount="50% de desconto"
              price="39,86"
              installments="12X DE"
              totalPrice="OU R$ 397,00 à vista com desconto"
              shipping="FRETE GRÁTIS"
              shippingColor="green"
              link="https://app.monetizze.com.br/r/AJB21485231?u=c&pl=LB181956"
            />
            
            <ProductCard 
              title="KIT PARA 3 MESES"
              subtitle="PAGUE 2 E LEVE 3!"
              image={kit3Meses}
              discount="40% de desconto"
              price="29,82"
              installments="12X DE"
              totalPrice="OU R$ 297,00 à vista com desconto"
              shipping="FRETE GRÁTIS"
              shippingColor="green"
              link="https://app.monetizze.com.br/r/AJB21485231?u=c&pl=WG181955"
            />
            
            <ProductCard 
              title="KIT PARA 1 MÊS"
              subtitle="PARA EXPERIMENTAR!"
              image={kit1Mes}
              discount="5% de desconto"
              price="19,78"
              installments="12X DE"
              totalPrice="OU R$ 197,00 à vista com desconto"
              shipping="FRETE 29,90"
              shippingColor="blue"
              link="https://app.monetizze.com.br/r/AJB21485231?u=c&pl=BF181954"
            />
          </div>

          <div className="mt-12 text-center bg-card rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">💳 Formas de Pagamento</h3>
            <p className="text-lg text-muted-foreground mb-4">
              Parcele em até 12x no cartão ou pague via PIX com desconto
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-4xl">
              💳 🏦 📱
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
            Segurança e Praticidade na Compra!
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <BenefitCard 
              icon="🔒"
              title="Compra 100% Segura"
              description="Ambiente protegido e criptografado para sua segurança"
            />
            <BenefitCard 
              icon="📦"
              title="Entrega Garantida"
              description="Seu pedido chega em segurança no endereço cadastrado"
            />
            <BenefitCard 
              icon="🛡️"
              title="Garantia de 30 Dias"
              description="Se não gostar, devolvemos 100% do seu dinheiro"
            />
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
            Como Comprar?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-lg">
              <div className="text-6xl mb-4">1️⃣</div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Escolha seu kit</h3>
              <p className="text-muted-foreground">Selecione a quantidade ideal para seu objetivo</p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-lg">
              <div className="text-6xl mb-4">2️⃣</div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Preencha seus dados</h3>
              <p className="text-muted-foreground">Informações de entrega e forma de pagamento</p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-lg">
              <div className="text-6xl mb-4">3️⃣</div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Receba em casa</h3>
              <p className="text-muted-foreground">Entrega rápida e segura em todo Brasil</p>
            </div>
          </div>

          <div className="mt-12">
            <Button 
              size="lg"
              className="text-xl py-7 px-12 font-bold shadow-2xl"
              onClick={scrollToOffers}
            >
              COMPRAR AGORA COM DESCONTO
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-t from-primary/10 to-background text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Aproveite Essa Oportunidade!
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Comece hoje mesmo sua jornada rumo aos resultados que você sempre desejou
          </p>
          <Button 
            size="lg"
            className="text-xl py-7 px-12 font-bold shadow-2xl hover:scale-105 transition-transform"
            onClick={scrollToOffers}
          >
            👉 VER OFERTAS E GARANTIR O MEU
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            ⚡ Estoque limitado • 🎁 Brindes exclusivos nos kits maiores
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 px-4 text-center">
        <p className="text-muted-foreground text-sm">
          © 2025 CCY Gotas. Todos os direitos reservados. | Este é um site de afiliados.
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          *Frete grátis para kits de 3, 5 e 12 meses. Consulte condições no checkout.
        </p>
      </footer>
    </div>
  );
};

export default Index;
