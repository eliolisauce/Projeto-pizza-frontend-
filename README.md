# Forno da Vila 🍕

Landing page simples de uma pizzaria online, feita com Next.js e React para o trabalho de Front-end.

## Integrantes

- Nicholas
- João
- Luccas
- Sofia

## Como rodar o projeto

1. Instale o Node.js (versão 20.9 ou mais nova) no computador.
2. Abra esta pasta no VS Code.
3. Abra o terminal do VS Code e rode `npm install`.
4. Quando terminar, rode `npm run dev`.
5. Abra o endereço `http://localhost:3000` no navegador.

O botão “+ Adicionar” aumenta a quantidade mostrada na sacola. Esse é um exemplo simples de interação; o projeto não processa pagamentos nem envia pedidos.

## Como cada pessoa pode fazer seu commit

Cada integrante deve trabalhar em uma cópia do mesmo repositório GitHub, fazer uma mudança pequena no arquivo indicado e enviar o commit para o GitHub. O repositório e os nomes dos integrantes devem ser entregues na plataforma pelo membro escolhido pelo grupo.

- **Luccas — estrutura:** revise `app/layout.js` e `package.json` e faça uma melhoria simples, por exemplo ajustar o título da página. Commit: `Adiciona estrutura inicial do Next.js`.
- **Nicholas — página:** edite `app/page.js`, por exemplo alterando o texto de apresentação ou acrescentando uma pizza. Commit: `Cria pagina da pizzaria`.
- **João — visual:** edite `app/globals.css`, por exemplo escolha outra cor ou ajuste um espaçamento. Commit: `Adiciona estilos da pagina`.
- **Sofia — instruções:** edite este `README.md`, por exemplo acrescente uma ideia de melhoria ou explique melhor como rodar. Commit: `Adiciona instrucoes do projeto`.

### Passos para cada integrante

No VS Code, abra o terminal dentro da pasta do projeto e rode:

```bash
git pull
```

Faça a edição do arquivo da sua parte, salve e então rode (troque `Seu Nome` e a mensagem):

```bash
git add app/page.js
git commit -m "Sua mensagem"
git push
```

Use no `git add` o arquivo que você editou. Para enviar mudanças em mais de um arquivo, liste os arquivos no mesmo comando. Se o `git push` disser que falta configurar usuário, configure seu nome e e-mail do GitHub no VS Code/Git. Cada pessoa precisa usar sua própria conta do GitHub para o commit aparecer com seu nome.
