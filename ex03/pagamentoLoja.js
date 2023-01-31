// EXERCÍCIO 3 - Página 45 do livro Lógica de Programação e Algorítimos com JavaScript de Edécio Iepsen

// Elaborar um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x.
// EXEMPLO: 
// Preço: R$60,00
// À vista: R$54,00
// Ou 3x de: R$20,00

let precoProduto = 60;
let pagamentoVista = precoProduto - precoProduto * 0.10;
let pagamentoParcelado = precoProduto / 3;

console.log('Preço: R$' + precoProduto);
console.log('À vista: R$' + pagamentoVista);
console.log('Ou 3x de: R$' + pagamentoParcelado);