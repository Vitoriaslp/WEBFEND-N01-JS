// Chame o método ligar do objeto carro para exibir a mensagem no console.

const carro = {
    marca: "Ford",
    modelo: "Fox",
    ano: "2007",
    ligar: function() { 
        console.log(`O ${this.modelo} está ligado.`);
    }
};

carro.ligar(); 