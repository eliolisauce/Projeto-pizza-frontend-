"use client";

import { useState } from "react";

export default function Home() {
  const [quantidade, setQuantidade] = useState(0);

  return (
    <main>
      <header>
        <h2>Pizza da Vila</h2>
        <nav>
          <a href="#inicio">Início</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <section className="inicio" id="inicio">
        <h1>Bem vindo à Pizza da Vila</h1>
        <p>Pizza gostosa e feita na hora.</p>
        <a className="botao" href="#cardapio">Cardápio</a>
      </section>

      <section className="cardapio" id="cardapio">
        <h2>Cardápio</h2>
        <div className="pizzas">
          <article>
            <h3>Quatro queijos</h3>
            <p>Mussarela, parmesão, provolone, gorgonzola e molho de tomate</p>
            <p><strong>R$ 35,00</strong></p>
            <button onClick={() => setQuantidade(quantidade + 1)}>Adicionar</button>
          </article>

      <article>
            <h3>Calabresa</h3>
            <p>Calabresa, queijo e cebola
            </p>
            <p><strong>R$40,00</strong></p>
            <button onClick={() => setQuantidade(quantidade + 1)}>Adicionar</button>
          </article>
          <article>
            <h3>Frango com batata palha</h3>
            <p>Frango, requeijão e batata palha</p>
            <p><strong>R$ 42,00</strong></p>
            <button onClick={() => setQuantidade(quantidade + 1)}>Adicionar</button>
          </article>
        </div>
        <p className="sacola">Itens na sacola {quantidade}</p>
      </section>

      <footer id="contato">
        <p>Pizza da Vila</p>
        <p>Contato: + (55)44 99999-9999</p>
      </footer>
    </main>
  );
}
