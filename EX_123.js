// Crie um programa que obtenha o dia do mês atual e exiba se é um dia ímpar ou par.

const dataAtual = new Date();
const dia = dataAtual.getDate();

if(dia % 2 == 0){
    console.log(`O dia ${dia} é par`)
}
else(
    console.log(`O dia ${dia} é impar`)
)