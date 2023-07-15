// Crie um método chamado ligar no objeto carro que exibe uma mensagem indicando que o carro está ligado.

const carro = {
    marca: "Ford",
    modelo: "Fox",
    ano: "2007",
    ligar: function() { 
        console.log(`O ${this.modelo} está ligado.`);
    }
};

// carro.ligar(); 