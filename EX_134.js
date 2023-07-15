// Adicione uma nova propriedade chamada email ao objeto pessoa.

const pessoa = {
    nome: "Vitoria",
    idade: 20,
    profissao: "Analista",
    email: "vitoriasenalp@gmail.com",

    saudacao: function() { 
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu e-mail é ${this.email}.`);
    }
};

pessoa.saudacao(); 