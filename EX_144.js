// Crie um método chamado calcularPrecoComDesconto no objeto produto que retorna o valor do produto com o desconto aplicado.

const produto = {
    nome: "Veja",
    preco: 10,
    desconto: 0.1,
    calcularPrecoComDesconto: function(){
        const precoDesconto = this.preco * (1 - this.desconto)
    return precoDesconto
    }
};

