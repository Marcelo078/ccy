import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "O que é CCY Gotas?",
    answer: "CCY Gotas é um suplemento alimentar líquido desenvolvido com fórmula premium contendo colágeno tipo II não desnaturado que auxilia na manutenção da função articular, além de ingredientes naturais que ajudam no controle de apetite e aceleração do metabolismo."
  },
  {
    question: "Como funciona o CCY Gotas?",
    answer: "O produto atua através de seus ingredientes naturais que trabalham em sinergia para acelerar o metabolismo, reduzir o apetite e auxiliar no processo de emagrecimento saudável. O formato em gotas facilita a absorção dos nutrientes pelo organismo."
  },
  {
    question: "Como devo usar o CCY Gotas?",
    answer: "Recomenda-se ingerir as gotas conforme indicado na embalagem, geralmente antes das principais refeições. Mantenha em local fresco e ao abrigo da luz. Consulte a bula do produto para instruções detalhadas de uso."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "Os resultados podem variar de pessoa para pessoa, mas geralmente são perceptíveis nas primeiras semanas de uso contínuo. Para melhores resultados, recomenda-se usar por no mínimo 3 meses aliado a uma alimentação equilibrada."
  },
  {
    question: "O produto tem garantia?",
    answer: "Sim! Oferecemos garantia de 30 dias. Se não ficar satisfeito com o produto, devolvemos seu dinheiro sem complicações."
  },
  {
    question: "Como é feita a entrega?",
    answer: "Trabalhamos com os Correios e entregas em todo o Brasil. Kits maiores possuem frete grátis. O prazo varia conforme sua região, mas geralmente entre 7 a 15 dias úteis."
  },
  {
    question: "O produto é aprovado pela ANVISA?",
    answer: "Sim, CCY Gotas é um suplemento alimentar produzido seguindo todas as normas e regulamentações da ANVISA para comercialização no Brasil."
  },
  {
    question: "Posso pagar em quantas vezes?",
    answer: "Você pode parcelar sua compra em até 12x no cartão de crédito. Também aceitamos pagamento via PIX com desconto à vista."
  }
];

export const FAQ = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Perguntas Frequentes
        </h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
