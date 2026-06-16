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
  { id: "copos", nome: "Copos da Felicidade" },
  { id: "brownies", nome: "Brownie" },
  {id: "cookie", nome: "Cookies"},
  { id: "potes", nome: "Bolos no pote" },
  { id: "cones", nome: "Cone Trufado" },
  { id: "bolos", nome: "Bolos" },
  { id: "espetinhos", nome: "Espetinho de Fruta" },
  { id: "tortas", nome: "Mouses e tortas" },
  
];

export const PRODUTOS = [
  // ── COPOS DA FELICIDADE ─────────────────────────────────
  {
    id: 2,
    cat: "copos",
    ativo: true,
    nome: "Copo Maracujá com Chocolate",
    desc: "Creme de maracujá refrescante, chocolate aveludado, brownie macio e chantininho leve.",
    preco: 16.0,
    imagem: "/images/maracuja.jpeg",
  },
  {
    id: 3,
    cat: "copos",
    ativo: true,
    nome: "Copo Chocobrownie",
    desc: "Camadas de chocolate cremoso, mousse leve e pedaços de brownie intenso. Finalizado com chantilly.",
    preco: 16.0,
    imagem: "/images/chocobrownie.png",
  },
  {
    id: 23,
    cat: "copos",
    ativo: true,
    nome: "Copo Ouro Branco",
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
    nome: "Fatia de Brownie com ouro branco",
    desc: "Fatia de Brownie coberta por uma camada de creme de chocolate ao leite, uma camada de creme de chocolate branco, finalizado com pedaços de bombom ouro branco.",
    preco: 18.00,
    imagem: "/images/brownie-ninho.webp",
  },
  {
    id: 25,
    cat: "brownies",
    ativo: true,
    nome: "Fatia de Brownie com oreo",
    desc: "Fatia de Brownie coberta com creme de bolacha oreo e finalizada com pedaçoes da bolacha",
    preco: 18.00,
    imagem: "/images/brownie-ninho.webp",
  },
  {
    id: 12,
    cat: "brownies",
    ativo: false,
    nome: "Fatia de Brownie Kinder Bueno",
    desc: "Brownie com creme de Ninho, Nutella e Kinder Bueno. Intenso e irresistível.",
    preco: 19.00,
    imagem: "/images/brownie-kinder.webp",
  },
  {
    id: 13,
    cat: "brownies",
    ativo: false,
    nome: "Fatia de Brownie Ferrero Rocher",
    desc: "Brownie com creme de chocolate, Nutella, amendoim triturado e bombom Ferrero.",
    preco: 16.9,
    imagem: "/images/brownie-ferrero.webp",
  },
   {
    id: 26,
    cat: "brownies",
    ativo: true,
    nome: "Fatia de Brownie ninho com morango",
    desc: "Fatia de brownie coberta com creme de ninho e pedaços de morango.",
    preco: 18.00,
    imagem: "/images/ninhocommorango.jpeg",
   },


  // ── COOKIES ────────────────────────────────────────
   {
    id: 10,
    cat: "cookie",
    ativo: true,
    nome: "Cookie na Marmitinha com Nutella",
    desc: "Massa amanteigada, macia por dentro e crocante por fora, recheada com Nutella cremosa.",
    preco: 24.9,
    imagem: "/images/cookie-nutella.webp",
  },

  // ── BOLO NO POTE ────────────────────────────────────────
  {
    id: 4,
    cat: "potes",
    ativo: false,
    nome: "Pote Ninho com Geleia de Morango",
    desc: "Bolo macio, creme de Ninho cremoso e geleia artesanal de morango — equilíbrio perfeito.",
    preco: 13.9,
    imagem: "/images/pote-ninho.webp",
  },
  {
    id: 5,
    cat: "potes",
    ativo: true,
    nome: "Pote de Coco",
    desc: "Massa fofinha com creme de coco sedoso. Sabor refrescante e tropical a cada colherada.",
    preco: 13.00,
    imagem: "/images/pote-coco.webp",
  },
  {
    id: 6,
    cat: "potes",
    ativo: true,
    nome: "Bolo de pote Abacaxi com Coco",
    desc: "Massa fofinha, creme de abacaxi suave e creme de coco cremoso. ",
    preco: 13.00,
    imagem: "/images/pote-abacaxi.webp",
  },
  {
    id: 7,
    cat: "potes",
    ativo: false,
    nome: "Bolo de pote Prestígio",
    desc: "Chocolate, creme de coco e brigadeiro. O clássico que você ama em versão pote.",
    preco: 13.00,
    imagem: "/images/pote-prestigio.webp",
  },
  {
    id: 8,
    cat: "potes",
    ativo: true,
    nome: "Bolo de pote Nozes com ninho",
    desc: "Massa branca fofinha intercaladas com camadas de creme de ninho e creme de nozes.",
    preco: 13.00,
    imagem: "/images/pote-cenoura.webp",
  },
  {
    id: 9,
    cat: "potes",
    ativo: false,
    nome: "Bolo de pote Chocolatudo",
    desc: "Para os chocólatras! Bolo de chocolate com creme de chocolate aveludado em camadas generosas.",
    preco: 13.00,
    imagem: "/images/pote-chocolatudo.webp",
  },

  // ── CONE TRUFADO ────────────────────────────────────────
  {
    id: 14,
    cat: "cones",
    ativo: false,
    nome: "Cone Ferrero Rocher",
    desc: "Casquinha crocante banhada no chocolate, recheada com brigadeiro e Nutella. Com amendoim triturado.",
    preco: 8.9,
    imagem: "/images/cone-ferrero.webp",
  },
  {
    id: 15,
    cat: "cones",
    ativo: false,
    nome: "Cone Ninho com Nutella",
    desc: "Casquinha crocante, brigadeiro de Ninho cremoso e Nutella. Combinação perfeita.",
    preco: 8.9,
    imagem: "/images/cone-ninho.webp",
  },
  {
    id: 16,
    cat: "cones",
    ativo: false,
    nome: "Cone Ninho com Geleia de Morango",
    desc: "Casquinha crocante, Ninho cremoso e geleia de morango — equilíbrio entre doce e frutado.",
    preco: 7.9,
    imagem: "/images/cone-ninho.webp",
  },
  {
    id: 17,
    cat: "cones",
    ativo: false,
    nome: "Cone Maracujá com Brigadeiro",
    desc: "Casquinha crocante, brigadeiro cremoso e creme de maracujá — leve e cheio de sabor.",
    preco: 7.9,
    imagem: "/images/cone-ninho.webp",
  },
  {
    id: 18,
    cat: "cones",
    ativo: false,
    nome: "Cone Brigadeiro com Ninho",
    desc: "Brigadeiro de Ninho e brigadeiro de chocolate — suavidade e intensidade em harmonia.",
    preco: 7.9,
    imagem: "/images/cone-ninho.webp",
  },

  // ── BOLOS ───────────────────────────────────────────────
  {
    id: 19,
    cat: "bolos",
    ativo: false,
    nome: "Bolo de Cenoura com Brigadeiro",
    desc: "Bolo de cenoura macio e fofinho, coberto com chocolate cremoso e granulado.",
    preco: 9.9,
    imagem: "/images/bolo-cenoura.webp",
  },

  // ── ESPETINHO DE FRUTA ──────────────────────────────────
  {
    id: 20,
    cat: "espetinhos",
    ativo: false,
    nome: "Espetinho de Morango",
    desc: "Morangos frescos banhados em chocolate belga ao leite, com granulado crocante.",
    preco: 7.0,
    imagem: "/images/espetinho-morango.webp",
  },
  {
    id: 21,
    cat: "espetinhos",
    ativo: true,
    nome: "Espetinho de Uva",
    desc: "Uvas frescas cobertas com chocolate branco e granulado colorido. Refrescante e sofisticado.",
    preco: 10.0,
    imagem: "/images/espeto.jpeg",
  },

 // ── TORTAS E MOUSES  ────────────────────────────────────────
{
  id: 27,
  cat: "tortas",
  ativo: true,
  nome: "Surpresa de Uva",
  desc: "Uvas frescas e suculentas envolvidas por um delicioso creme branco e cobertas com uma generosa camada de chocolate.",
  preco: 16.0,
  imagem: "/images/uva.jpeg",
}
];