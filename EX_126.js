// Crie um programa que defina uma data específica (por exemplo, seu aniversário) e exiba a data formatada no formato "dd/mm/aaaa".

const dataEspecifica = new Date(2002, 9, 30); // 30º de outubro de 2002

const dia = dataEspecifica.getDate();
const mes = dataEspecifica.getMonth() + 1;
const ano = dataEspecifica.getFullYear();
 

console.log(dataFormatada);