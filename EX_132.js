// Crie um objeto chamado pessoa com as propriedades nome, idade e profissao.

const pessoa = {
    nome: "Vitoria",
    idade: 20,
    profissao: "Analista",
    saudacao: function() { 
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
};

pessoa.saudacao(); 