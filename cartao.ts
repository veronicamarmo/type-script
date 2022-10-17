// encapsulamento - ocultar
// modificador de acessos
// Public, private, protected, readonly, -> leitura e escrita get set


class Cartao {


    //Atributos - Caracteristicas 
    // titular: string = "Paulo";
    // numero: number = 11111111222222223333;
    // ativo: boolean = true;
    // cvv: number = 123;


    public titular: string;
    protected numero: number; // consigo chamar nas classes filhas, mas nao consigoalterar na instancia do objeto
    private ativo: boolean; // consigo chamar apenas nessa classe 
    readonly cvv: number; // apenas leitura não é possivel atribuir novos valores


    // get - leitura 
    // set - escrta

    private _idade: number = 19;

    get Idade(): number {
        return this.Idade
    }

    set Idade(valor: number) {
        if (valor >= 18) {

            this._idade = valor;
        }
    }



    constructor(_titular: string, _numero: number, _ativo: boolean, _cvv: number) {
        this.titular = _titular
        this.numero = _numero
        this.ativo = _ativo
        this.cvv = _cvv
    }

    // Metodos - funcoes - acao
    Cancelar(): void {
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

    limite: number;

    constructor(_titularSuper: string, _numeroSuper: number, _ativoSuper: boolean, _cvvSuper: number, _limite: number) {

        super(_titularSuper, _numeroSuper, _ativoSuper, _cvvSuper)

        this.limite = _limite
    }

    ConsutalLimite(): number {
        return this.limite
    }

    //sobrescrita
    Cancelar(): void{
        console.log("agora seu cartao de credito foi cancelado");
        
    }
}

let cartao2 = new CartaoCredito("Paulo", 555444, true, 123, 5000);

// console.log(cartao2.ConsutalLimite());

// cartao2.Idade = 20;

// console.log(cartao2.Idade)
cartao2.Cancelar();

// Interface - contrato 
interface IcartaoDebito {

    // Saldo - atributo 
    // subtrairSaldo - metodo
    saldo: number;
    SubtrairSaldo(valor: number): number;

    //CRUD
    // create
    // read
    // update
    // delete

}

class CartaoDebito extends Cartao implements IcartaoDebito {

    saldo: number = 8000;

    SubtrairSaldo(valor: number): number {
        this.saldo = this.saldo - valor;
        return this.saldo;
    }

}


let cartao3 = new CartaoDebito("hercules", 22233344, true, 234)
console.log(cartao3.SubtrairSaldo(700));


