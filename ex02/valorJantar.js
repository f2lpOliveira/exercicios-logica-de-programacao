// EXERCÍCIO 2 - Página 41 do livro Lógica de Programação e Algorítimos com JavaScript de Edécio Iepsen

// Elaborar um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// EXEMPLO:
// Valor do jantar: R$80,00
// Taxa do garçom: R$8,00
// Total a pagar: R$88,00

let valorJantar = 80;
let taxaGarcom = valorJantar * 0.10;
let totalPagar = valorJantar + taxaGarcom;

console.log('Valor do jantar: R$' + valorJantar);
console.log('Taxa do garçom: R$' + taxaGarcom);
console.log('Total a pagar: R$' + totalPagar);
