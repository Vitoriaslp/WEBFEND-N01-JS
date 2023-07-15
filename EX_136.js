// Chame o método apresentacao do objeto pessoa e exiba a mensagem no console.

const pessoa = {
    nome: "Vitoria",
    idade: 20,
    profissao: "Analista",
    bairro: "Riacho Grande",
    saudacao: function() { 
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e moro no ${this.bairro}`);
    }
};

pessoa.saudacao(); 