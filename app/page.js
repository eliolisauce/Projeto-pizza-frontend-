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