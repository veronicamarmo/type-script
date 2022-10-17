"use strict";
// encapsulamento - ocultar
// modificador de acessos
// Public, private, protected, readonly, -> leitura e escrita get set
class Cartao {
    constructor(_titular, _numero, _ativo, _cvv) {
        // get - leitura 
        // set - escrta
        this._idade = 19;
        this.titular = _titular;
        this.numero = _numero;
        this.ativo = _ativo;
        this.cvv = _cvv;
    }
    get Idade() {
        return this.Idade;
    }
    set Idade(valor) {
        if (valor >= 18) {
            this._idade = valor;
        }
    }
    // Metodos - funcoes - acao
    Cancelar() {
        this.ativo = false;
        console.log("Cartão cancelado!");
    }
}
// Instancia - criação do objeto
// let cartao = new Cartao();
// cartao.titular = "Cristiano";
// cartao.Cancelar();
// // console.log(cartao.titular)
// let cartao1 = new Cartao('felipe', 555444333, true, 987);
// polismorfismo
// sobrescrita de metodo do mesmo nome
// sobrecarga - nao disponivel no ts
class CartaoCredito extends Cartao {
    constructor(_titularSuper, _numeroSuper, _ativoSuper, _cvvSuper, _limite) {
        super(_titularSuper, _numeroSuper, _ativoSuper, _cvvSuper);
        this.limite = _limite;
    }
    ConsutalLimite() {
        return this.limite;
    }
    //sobrescrita
    Cancelar() {
        console.log("agora seu cartao de credito foi cancelado");
    }
}
let cartao2 = new CartaoCredito("Paulo", 555444, true, 123, 5000);
// console.log(cartao2.ConsutalLimite());
// cartao2.Idade = 20;
// console.log(cartao2.Idade)
cartao2.Cancelar();
class CartaoDebito extends Cartao {
    constructor() {
        super(...arguments);
        this.saldo = 8000;
    }
    SubtrairSaldo(valor) {
        this.saldo = this.saldo - valor;
        return this.saldo;
    }
}
let cartao3 = new CartaoDebito("hercules", 22233344, true, 234);
console.log(cartao3.SubtrairSaldo(700));
