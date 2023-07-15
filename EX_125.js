// Crie um programa que obtenha o ano completo atual e exiba se é um ano bissexto ou não.

// tem que ser divisivel por 4 ou por 400 e não pode ser divisel por 100

const dataAtual = new Date();
dataAtual.setFullYear(1992);
const ano = dataAtual.getFullYear();
console.log(ano);

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
    console.log(`O ${ano} é um ano bissexto`)
}
else(
    console.log(`O ${ano} não é um ano bissexto`)
)