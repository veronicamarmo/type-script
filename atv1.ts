let valores: Array<number> = [20, 24, 25, 10, 33];
let numero: number = 8;

const Soma = (n: number[]): void => {
    for (let index = 0; index < n.length; index++) {

        console.log(" O número " + n[index] + ", somado com " + numero + " é = " + (n[index] + numero));

    }
}

Soma(valores)