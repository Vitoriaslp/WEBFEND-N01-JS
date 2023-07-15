// Crie um programa que obtenha a data atual e exiba o nome do dia da semana.

const dataAtual = new Date();
const semana = dataAtual.getDay();

let semanas = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

const nomeSemana = semanas[semana];
console.log(nomeSemana);