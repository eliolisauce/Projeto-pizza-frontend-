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
      