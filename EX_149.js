// Mesclar objetos: Crie dois objetos, obj1 e obj2, com algumas propriedades. Utilize o operador spread para criar um novo objeto chamado mergedObj que contenha todas as propriedades de obj1 e obj2. Exiba o novo objeto.

const obj1 = {
    nome: "Vitoria",
    idade: 20,
    profissao: "Analista",
};

const obj2 = {
    bairro: "Riacho",
    cidade: "São Bernardo do Campo",
    estado: "São Paulo",
};

const mergedObj = {...obj1,obj2};

console.log(mergedObj);