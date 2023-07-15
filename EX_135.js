// Crie um método chamado apresentacao no objeto pessoa que retorna uma mensagem de apresentação contendo o nome e a profissão da pessoa.

const pessoa = {
    nome: "Vitoria",
    idade: 20,
    profissao: "Analista",
    saudacao: function() { 
        console.log(`Olá, meu nome é ${this.nome} e sou ${this.profissao}.`);
    }
};

pessoa.saudacao(); 