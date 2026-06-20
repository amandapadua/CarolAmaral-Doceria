// ============================================================
//  CAROL AMARAL DOCERIA — produtos.js
//  ✏️  ARQUIVO DE EDIÇÃO FÁCIL
//
//  Como adicionar um produto:
//  1. Copie um bloco { } existente
//  2. Cole dentro da categoria certa
//  3. Preencha: nome, desc, preco, imagem
//  4. IMPORTANTE: use um id que ainda não exista em NENHUM produto
//     (o id precisa ser único em todo o arquivo, não só na categoria)
//  5. Salve — o cardápio atualiza sozinho!
//
//  Como remover: apague o bloco inteiro { }
//  Como desativar sem apagar: ativo: false
// ============================================================

export const CATEGORIAS = [
  { id: "copos", nome: "Copo da Felicidade" },
  { id: "brownies", nome: "Brownie" },
  {id: "cookie", nome: "Cookie"},
  { id: "potes", nome: "Bolo no Pote" },
  { id: "cones", nome: "Cone Trufado" },
  { id: "bolos", nome: "Bolo" },
  { id: "espetinhos", nome: "Espetinho de Fruta" },
  { id: "tortas", nome: "Mousse e Torta" },
  {id: "palha", nome: "Palha Italiana"},
  
];

export const PRODUTOS = [
  // ── COPOS DA FELICIDADE ─────────────────────────────────
  {
    id: 2,
    cat: "copos",
    ativo: true,
    nome: "Copo maracujá com chocolate",
    desc: "Creme de maracujá refrescante, chocolate aveludado, brownie macio e chantininho leve.",
    preco: 16.0,
    imagem: "/images/maracuja.jpeg",
  },
  {
    id: 3,
    cat: "copos",
    ativo: true,
    nome: "Copo chocobrownie",
    desc: "Camadas de chocolate cremoso, mousse leve e pedaços de brownie intenso. Finalizado com chantilly.",
    preco: 16.0,
    imagem: "/images/chocobrownie.png",
  },
  {
    id: 23,
    cat: "copos",
    ativo: true,
    nome: "Copo ouro branco",
    desc: "Camadas de creme de chocolate ao leite, creme de chocolate branco, e pedaços de bombom ouro branco finalizados com chantininho, que trazem crocância e muito sabor a cada colherada.",
    preco: 16.0,
    imagem: "/images/copo-brownie.webp",
  },
  {
    id: 24,
    cat: "copos",
    ativo: false,
    nome: "Copo Oreo",
    desc: "",
    preco: 16.0,
    imagem: "/images/copo-brownie.webp",
  },

  // ── BROWNIE ────────────────────────────────────
  {
    id: 11,
    cat: "brownies",
    ativo: true,
    nome: "Fatia de brownie com ouro branco",
    desc: "Fatia de brownie coberta por uma camada de creme de chocolate ao leite, uma camada de creme de chocolate branco, finalizado com pedaços de bombom ouro branco.",
    preco: 18.00,
    imagem: "/images/brownie-ninho.webp",
  },
  {
    id: 25,
    cat: "brownies",
    ativo: true,
    nome: "Fatia de brownie com oreo",
    desc: "Fatia de Brownie coberta com creme de bolacha oreo e finalizada com pedaçoes da bolacha",
    preco: 18.00,
    imagem: "/images/brownie-ninho.webp",
  },
  {
    id: 12,
    cat: "brownies",
    ativo: false,
    nome: "Fatia de brownie kinder bueno",
    desc: "Brownie com creme de Ninho, Nutella e Kinder Bueno. Intenso e irresistível.",
    preco: 19.00,
    imagem: "/images/brownie-kinder.webp",
  },
  {
    id: 13,
    cat: "brownies",
    ativo: false,
    nome: "Fatia de brownie ferrero rocher",
    desc: "Brownie com creme de chocolate, Nutella, amendoim triturado e bombom Ferrero.",
    preco: 16.9,
    imagem: "/images/brownie-ferrero.webp",
  },
   {
    id: 26,
    cat: "brownies",
    ativo: true,
    nome: "Fatia de brownie ninho com morango",
    desc: "Fatia de brownie coberta com creme de ninho e pedaços de morango.",
    preco: 18.00,
    imagem: "/images/ninhocommorango.jpeg",
   },


  // ── COOKIES ────────────────────────────────────────
   {
    id: 10,
    cat: "cookie",
    ativo: false,
    nome: "Cookie na marmitinha com nutella",
    desc: "Massa amanteigada, macia por dentro e crocante por fora, recheada com Nutella cremosa.",
    preco: 24.9,
    imagem: "/images/cookie-nutella.webp",
  },

     {
    id: 28,
    cat: "cookie",
    ativo: true,
    nome: "Mini cookies no copo",
    desc: "5 mini cookies de chocolate com gotas de chocolate, acomoanhados de uma deliciosa cobertura dupla na tampa: creme de ninho cremoso e Nutella.",
    preco: 16.00,
    imagem: "/images/mini-cookie.jpeg",
  },

  // ── BOLO NO POTE ────────────────────────────────────────
  {
    id: 4,
    cat: "potes",
    ativo: false,
    nome: "Bolo de pote ninho com geleia de morango",
    desc: "Bolo macio, creme de Ninho cremoso e geleia artesanal de morango — equilíbrio perfeito.",
    preco: 13.9,
    imagem: "/images/pote-ninho.webp",
  },
  {
    id: 5,
    cat: "potes",
    ativo: true,
    nome: "Bolo de pote de coco",
    desc: "Massa fofinha com creme de coco sedoso. Sabor refrescante e tropical a cada colherada.",
    preco: 13.00,
    imagem: "/images/bolopote.jpeg",
  },
  {
    id: 6,
    cat: "potes",
    ativo: true,
    nome: "Bolo de pote abacaxi com coco",
    desc: "Massa fofinha, creme de abacaxi suave e creme de coco cremoso. ",
    preco: 13.00,
    imagem: "/images/bolopote.jpeg",
  },
  {
    id: 7,
    cat: "potes",
    ativo: false,
    nome: "Bolo de pote prestígio",
    desc: "Chocolate, creme de coco e brigadeiro. O clássico que você ama em versão pote.",
    preco: 13.00,
    imagem: "/images/pote-prestigio.webp",
  },
  {
    id: 8,
    cat: "potes",
    ativo: true,
    nome: "Bolo de pote nozes com ninho",
    desc: "Massa branca fofinha intercaladas com camadas de creme de ninho e creme de nozes.",
    preco: 13.00,
    imagem: "/images/bolopote.jpeg",
  },
  {
    id: 9,
    cat: "potes",
    ativo: false,
    nome: "Bolo de pote chocolatudo",
    desc: "Para os chocólatras! Bolo de chocolate com creme de chocolate aveludado em camadas generosas.",
    preco: 13.00,
    imagem: "/images/pote-chocolatudo.webp",
  },

  // ── CONE TRUFADO ────────────────────────────────────────
  {
    id: 14,
    cat: "cones",
    ativo: false,
    nome: "Cone ferrero rocher",
    desc: "Casquinha crocante banhada no chocolate, recheada com brigadeiro e Nutella. Com amendoim triturado.",
    preco: 8.9,
    imagem: "/images/cone-ferrero.webp",
  },
  {
    id: 15,
    cat: "cones",
    ativo: false,
    nome: "Cone ninho com nutella",
    desc: "Casquinha crocante, brigadeiro de Ninho cremoso e Nutella. Combinação perfeita.",
    preco: 8.9,
    imagem: "/images/cone-ninho.webp",
  },
  {
    id: 16,
    cat: "cones",
    ativo: false,
    nome: "Cone ninho com geleia de morango",
    desc: "Casquinha crocante, Ninho cremoso e geleia de morango — equilíbrio entre doce e frutado.",
    preco: 7.9,
    imagem: "/images/cone-ninho.webp",
  },
  {
    id: 17,
    cat: "cones",
    ativo: false,
    nome: "Cone maracujá com brigadeiro",
    desc: "Casquinha crocante, brigadeiro cremoso e creme de maracujá — leve e cheio de sabor.",
    preco: 7.9,
    imagem: "/images/cone-ninho.webp",
  },
  {
    id: 18,
    cat: "cones",
    ativo: false,
    nome: "Cone brigadeiro com ninho",
    desc: "Brigadeiro de Ninho e brigadeiro de chocolate — suavidade e intensidade em harmonia.",
    preco: 7.9,
    imagem: "/images/cone-ninho.webp",
  },

  // ── BOLOS ───────────────────────────────────────────────
  {
    id: 19,
    cat: "bolos",
    ativo: false,
    nome: "Bolo de cenoura com brigadeiro",
    desc: "Bolo de cenoura macio e fofinho, coberto com chocolate cremoso e granulado.",
    preco: 9.9,
    imagem: "/images/bolo-cenoura.webp",
  },

  // ── ESPETINHO DE FRUTA ──────────────────────────────────
  {
    id: 20,
    cat: "espetinhos",
    ativo: false,
    nome: "Espetinho de morango",
    desc: "Morangos frescos banhados em chocolate belga ao leite, com granulado crocante.",
    preco: 7.0,
    imagem: "/images/espetinho-morango.webp",
  },
  {
    id: 21,
    cat: "espetinhos",
    ativo: true,
    nome: "Espetinho de uva",
    desc: "Uvas frescas cobertas com chocolate branco e granulado colorido. Refrescante e sofisticado.",
    preco: 10.0,
    imagem: "/images/espeto.jpeg",
  },

 // ── TORTAS E MOUSES  ────────────────────────────────────────
{
  id: 27,
  cat: "tortas",
  ativo: true,
  nome: "Surpresa de uva",
  desc: "Uvas frescas e suculentas envolvidas por um delicioso creme branco e cobertas com uma generosa camada de chocolate.",
  preco: 16.0,
  imagem: "/images/uva.jpeg",
},


// ── Palha Italiana ────────────────────────────────────────

{
  id: 29,
  cat: "palha",
  ativo: true,
  nome: "Palha Italiana de ninho com oreo",
  desc: "Cremosa, feita com leite Ninho e pedaços de Oreo, finalizada com leite em pó. Uma combinação deliciosa e irresistível!",
  preco: 7.50,
  imagem: "/images/palha.jpeg",
}];
