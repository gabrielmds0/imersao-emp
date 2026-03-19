# Imersão para Empresários — Landing Page

## Como alterar textos da página

Todos os textos da página ficam em **um único arquivo**:

```
src/data/content.js
```

Abra esse arquivo, encontre o texto que deseja alterar, modifique e salve. Após o push no GitHub, a Vercel faz o deploy automaticamente.

---

## Estrutura do arquivo `content.js`

O arquivo é dividido por seções da página. Cada seção é um bloco com nome próprio.

### 1. Hero (topo da página)

```js
export const hero = {
  headline: 'Texto principal grande',
  subheadline: 'Texto de apoio abaixo do título',
  cta: 'Texto do botão',
  bullets: [
    'Primeiro ponto',
    'Segundo ponto',
    'Terceiro ponto',
  ],
  event: {
    dates: '24, 25 e 26 de Março',
    time: '19h',
    format: 'Ao vivo e Online',
  },
  vacancyPercent: 83,   // número da barra de vagas (0 a 100)
}
```

### 2. Marquee (faixa de depoimentos que rola)

```js
export const marqueeTestimonials = [
  '"Depoimento 1" — Nome',
  '"Depoimento 2" — Nome',
]
```

### 3. Pra Quem É

```js
export const forWho = {
  headline: 'Pra quem é:',
  items: [
    { iconKey: 'briefcase', text: 'Texto do item 1' },
    { iconKey: 'cog',       text: 'Texto do item 2' },
    { iconKey: 'trending',  text: 'Texto do item 3' },
    { iconKey: 'unlock',    text: 'Texto do item 4' },
  ],
  subheadline: 'Texto branco de fechamento',
  subheadline2: 'Texto azul em destaque',
}
```

> **Não altere** `iconKey` — ele define o ícone. Apenas altere o `text`.

### 4. O Modelo (Opportunity)

```js
export const opportunity = {
  headline: 'Título da seção',
  steps: [
    { iconKey: 'monitor', title: 'Título do passo', desc: 'Descrição' },
    // ... mais passos
  ],
  anonymous: [
    { iconKey: 'film', title: 'Título', desc: 'Descrição' },
    // ... mais itens
  ],
  subheadline1: 'Texto branco de fechamento',
  subheadline2: 'Texto azul em destaque',
}
```

### 5. Cronograma (Schedule)

```js
export const schedule = {
  headline: 'Cronograma da Imersão',
  subheadline: 'Subtítulo',
  days: [
    {
      day: 'Dia 1',
      date: 'Terça, 24/03 às 19h',
      title: 'O Modelo de Negócio',
      items: [
        'Tópico 1 do dia',
        'Tópico 2 do dia',
      ],
    },
    // ... Dia 2, Dia 3
  ],
}
```

> **Não altere** `color` nem `image` — eles controlam visual e imagem.

### 6. Bio (Cassiano)

```js
export const bio = {
  name: 'Cassiano Girardi',
  stats: [
    { value: 8, prefix: '+', label: 'anos de experiência' },
    // ... mais stats
  ],
  text: [
    'Parágrafo 1 da bio',
    'Parágrafo 2 da bio',
    'Parágrafo 3 da bio',
  ],
  closing: 'Frase de fechamento em destaque',
}
```

### 7. Resultados (Results)

```js
export const results = {
  headline: 'Título principal',
  subtitle: 'Subtítulo',
  subheadline1: 'Texto branco de fechamento',
  subheadline2: 'Texto azul em destaque',
}
```

> As imagens dos resultados ficam na pasta `public/`. Para trocar, substitua o arquivo mantendo o mesmo nome.

### 8. Oferta (Offer)

```js
export const offer = {
  sectionLabel: 'O que você vai receber',
  headline: 'Título',
  price: 97,              // preço atual
  originalPrice: 297,     // preço riscado
  badge: 'Lote 1',
  cta: 'Comprar Ingresso', // texto do botão
  paymentNote: 'Pagamento seguro via Kiwify',
}
```

### 9. CTA Final

```js
export const finalCta = {
  title: 'Imersão para Empresários',
  headline: 'O modelo de negócio está na sua frente.',
  headlineHighlight: 'Agora só falta começar.',
  details: [
    '24, 25 e 26 de março,',
    'das 19h às 22h.',
    'Online e ao vivo',
    'com Cassiano Girardi',
  ],
  cta: 'Quero criar receita em dólar',
}
```

### 10. Garantia

```js
export const guarantee = {
  headline: 'Risco Zero',
  text: 'Texto da garantia',
}
```

### 11. FAQ (Perguntas Frequentes)

```js
export const faq = [
  { q: 'Pergunta?', a: 'Resposta.' },
  { q: 'Outra pergunta?', a: 'Outra resposta.' },
]
```

Para adicionar uma nova pergunta, copie uma linha `{ q: '...', a: '...' },` e altere.

---

## Regras importantes ao editar

1. **Não apague aspas** (`'` ou `"`) — todo texto precisa estar entre aspas
2. **Não apague vírgulas** no final das linhas
3. **Não altere nomes de variáveis** (ex: `headline`, `text`, `cta`)
4. **Para usar apóstrofo** dentro de aspas simples, use `\'`
   Exemplo: `'Você não precisa saber inglês'` ✅
   Exemplo: `'Cassiano\'s method'` ✅
5. **Colchetes `[ ]`** = lista de itens. Cada item separado por vírgula
6. **Chaves `{ }`** = bloco de dados. Não remova

---

## Link de pagamento (Kiwify)

O link do checkout fica no topo do arquivo:

```js
export const KIWIFY_URL = 'https://pay.kiwify.com.br/lB4Bg9c'
```

Altere apenas a URL entre aspas para mudar o destino do botão de compra.

---

## Formulário do Modal (Formly)

O formulário que abre ao clicar em "Comprar Ingresso" está no arquivo `index.html`, na linha:

```html
<iframe id="formly" ... ></iframe>
```

E o link do formulário está no script abaixo:

```js
var iframeUrl = "https://digital.getformly.app/2ob7rZ";
```

Para trocar o formulário, altere apenas essa URL.

---

## Imagens

As imagens ficam na pasta `public/`. Para trocar uma imagem:

1. Salve a nova imagem com o **mesmo nome** do arquivo original
2. Coloque na pasta `public/`
3. Faça push no GitHub

Imagens usadas:
- `cassiano-palestra-azul.webp` — foto principal do hero
- `cassiano-montagem.webp` — foto da bio
- `dia1.webp`, `dia3.webp` — fotos do cronograma
- `cassiano-gui-office.webp` — foto do dia 2
- `01-resultado-*.webp` a `04-resultado-*.webp` — prints de resultados
- `logo-imersao-para-empresarios.webp` — logo do header

---

## Como clonar e rodar o projeto localmente

### Pré-requisitos

1. Instale o **Node.js** (versão 18 ou superior): https://nodejs.org
2. Instale o **Git**: https://git-scm.com/downloads
3. Tenha uma conta no **GitHub** com acesso ao repositório

### O que é "clonar"?

Clonar significa **baixar uma cópia completa do projeto** do GitHub para o seu computador. Isso cria uma pasta no seu PC com todos os arquivos do projeto, permitindo que você edite localmente e depois envie as alterações de volta.

### Passo a passo

#### 1. Crie uma pasta para seus projetos

Antes de clonar, escolha um local no seu computador para guardar o projeto. Exemplo:

- Windows: `C:\Projetos\`
- Mac: `~/Projetos/`

No terminal, navegue até essa pasta (ou crie se não existir):

```bash
# Windows
mkdir C:\Projetos
cd C:\Projetos

# Mac / Linux
mkdir ~/Projetos
cd ~/Projetos
```

#### 2. Clone o repositório

Ainda no terminal, dentro da pasta que você criou, rode:

```bash
git clone https://github.com/gabrielmds0/imersao-emp.git
```

Isso vai criar uma pasta chamada `imersao-emp` dentro de `Projetos`, com todos os arquivos do projeto.

#### 3. Entre na pasta do projeto

```bash
cd imersao-emp
```

#### 3. Instale as dependências

```bash
npm install
```

#### 4. Rode o servidor de desenvolvimento

```bash
npm run dev
```

O terminal vai mostrar algo como:

```
Local: http://localhost:5173/imersao-pra-empresarios/
```

Abra esse link no navegador para ver a página rodando localmente. Qualquer alteração que você salvar nos arquivos será refletida automaticamente no navegador.

#### 5. Para parar o servidor

Pressione `Ctrl + C` no terminal.

---

## Usando o Antigravity (editor de código)

1. Abra o **Antigravity**
2. Vá em **File → Open Folder** e selecione a pasta `imersao-emp` que foi clonada
3. Na barra lateral esquerda, navegue até `src/data/content.js` e clique para abrir
4. Faça as alterações desejadas nos textos
5. Salve o arquivo (`Ctrl + S`)
6. Se o servidor de desenvolvimento estiver rodando (`npm run dev`), as alterações aparecem automaticamente no navegador

---

## Comandos NPM úteis

| Comando | O que faz |
|---------|-----------|
| `npm install` | Instala todas as dependências do projeto (rodar 1x após clonar) |
| `npm run dev` | Inicia o servidor local de desenvolvimento |
| `npm run build` | Gera os arquivos otimizados para produção (pasta `dist/`) |
| `npm run preview` | Visualiza localmente o build de produção |

---

## Deploy

O deploy é automático. Ao fazer `git push` na branch `main`, a Vercel detecta e publica em poucos minutos.

### Fluxo completo após editar:

```bash
git add src/data/content.js
git commit -m "atualiza textos da página"
git push
```

Se você editou outros arquivos além do `content.js`:

```bash
git add .
git commit -m "descrição do que foi alterado"
git push
```

### Verificar o status antes de commitar:

```bash
git status
```

### Ver o que foi alterado:

```bash
git diff
```

URL de produção: configurada no painel da Vercel.
