// Crie um programa que defina a data atual para o dia 15 do mês atual e exiba-a.

const dataAtual = new Date();

dataAtual.setDate(15)
const mes = dataAtual.getMonth() + 1;
const ano = dataAtual.getFullYear();

const dataFormatada = ("0" + dataAtual.getDate()).slice(-2) + "/" + ("0" + mes).slice(-2) + "/" + ano;

console.log(dataFormatada)