// Passar argumentos para uma função: Crie um array numbers com alguns números e utilize o operador spread para passar esses números como argumentos para a função Math.max(). Armazene o resultado em uma variável chamada max e exiba-o.

const numbers = [15, 29, 35, 84, 105];
let maiorNumb = Math.max(...numbers)
console.log(maiorNumb);