import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BelezaRadiante() {
  return (
    <div className="bg-gradient-to-b from-[#40E0D0] via-[#FFC0CB] to-[#FFD700] min-h-screen text-gray-800 font-sans">
      {/* Header */}
      <header className="text-center py-10 shadow-md bg-white/50 backdrop-blur-md">
        <h1 className="text-4xl font-bold text-[#DAA520] drop-shadow">Beleza Radiante</h1>
        <p className="mt-2 text-lg text-[#555]">Cuidado com a saúde e estética em um só lugar</p>
      </header>

      {/* Seções */}
      <main className="px-4 md:px-20 space-y-20 py-12">
        {/* Sobre nós */}
        <section id="sobre" className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-[#40E0D0]">Sobre Nós</h2>
          <p className="text-base max-w-2xl mx-auto">
            A Beleza Radiante nasceu com a missão de oferecer produtos que realcem a beleza natural e promovam bem-estar. Com uma curadoria de itens de alta qualidade, proporcionamos uma experiência completa de cuidado com a saúde e estética.
          </p>
        </section>

        {/* Produtos */}
        <section id="produtos" className="text-center">
          <h2 className="text-3xl font-semibold mb-6 text-[#FFC0CB]">Nossos Produtos</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="shadow-lg">
                <CardContent className="p-4">
                  <img src={`https://via.placeholder.com/300x200?text=Produto+${i}`} alt={`Produto ${i}`} className="rounded-xl mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Produto {i}</h3>
                  <p className="text-sm mb-4">Descrição breve do produto {i}, destacando seus benefícios.</p>
                  <Button className="bg-[#DAA520] text-white hover:bg-[#c89e18]">Comprar</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-[#DAA520]">Depoimentos</h2>
          <p className="italic max-w-xl mx-auto">
            "A Beleza Radiante transformou minha rotina de cuidados! Os produtos são incríveis e o atendimento impecável."
          </p>
          <p className="mt-2 font-semibold">– Cliente Satisfeita</p>
        </section>

        {/* Contato */}
        <section id="contato" className="text-center">
          <h2 className="text-3xl font-semibold mb-4 text-[#40E0D0]">Fale Conosco</h2>
          <p className="max-w-md mx-auto mb-6">
            Entre em contato para dúvidas, sugestões ou parcerias:
          </p>
          <form className="grid gap-4 max-w-md mx-auto">
            <input type="text" placeholder="Seu nome" className="p-2 rounded border" />
            <input type="email" placeholder="Seu e-mail" className="p-2 rounded border" />
            <textarea placeholder="Sua mensagem" rows={4} className="p-2 rounded border"></textarea>
            <Button className="bg-[#FFC0CB] text-white hover:bg-[#e6a8b4]">Enviar</Button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center text-sm py-6 bg-white/50 backdrop-blur-md">
        © 2025 Beleza Radiante. Todos os direitos reservados.
      </footer>
    </div>
  );
}
