// Crie um programa que obtenha a data atual e exiba no formato "dd/mm/aaaa".

const dataAtual = new Date();

const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();
 
const dataFormatada = dia.toString().padStart(2,'0') + "/" + mes.toString().padStart(2, '0') + "/"  + ano;

console.log(dataFormatada);
