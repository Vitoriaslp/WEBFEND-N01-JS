// Crie um programa que defina a hora atual para 9 horas da manhã e exiba-a.

const dataAtual = new Date();

dataAtual.setHours(9);
dataAtual.setMinutes(0);
dataAtual.setSeconds(0);

const horaFormatada = ("0" + dataAtual.getHours()).slice(-2) + ":" + ("0" + dataAtual.getMinutes()).slice(-2)+ ":" + ("0" + dataAtual.getUTCSeconds()).slice(-2);

console.log(horaFormatada)