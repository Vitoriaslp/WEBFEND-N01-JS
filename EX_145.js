// Chame o método calcularPrecoComDesconto do objeto produto e exiba o valor calculado no console.

const produto = {
    nome: "Veja",
    preco: 10,
    desconto: 0.2,
    calcularPrecoComDesconto: function(){
        const precoDesconto = this.preco * (1 - this.desconto)
    return precoDesconto
    }
};


console.log(produto.calcularPrecoComDesconto());