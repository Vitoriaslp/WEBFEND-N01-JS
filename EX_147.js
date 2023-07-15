// Copiar um objeto: Crie um objeto obj1 com algumas propriedades e utilize o operador spread para criar um novo objeto chamado copiedObj que seja uma cópia exata do obj1. Exiba o novo objeto.

const obj1 = {
    nome: "Vitoria",
    sobrenome: "Sena",
    idade: 20,
};

const copiedObj = {...obj1};
console.log(copiedObj);