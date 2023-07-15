// Crie um programa que obtenha o mês atual e exiba o nome do mês por extenso.

const dataAtual = new Date();
const mes = dataAtual.getMonth();

let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Dezembro"];

const nomeMes = meses[mes];
console.log(`O mês atual é ${nomeMes}`);
