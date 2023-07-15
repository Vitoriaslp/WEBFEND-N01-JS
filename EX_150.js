// Clonar um array e adicionar elementos: Crie um array originalArray com alguns elementos e utilize o operador spread para cloná-lo em um novo array chamado newArray. Em seguida, adicione alguns elementos extras ao newArray utilizando o operador spread novamente. Exiba o resultado.

const originalArray = {
    marca1: "Samsung",
    marca2: "Apple",
    marca3: "Motorola",
};

const newArray = {...originalArray};
console.log(newArray);

const elementosArray = {...originalArray, Xiaomi, Nokia};

console.log(newArray);
console.log(elementosArray);