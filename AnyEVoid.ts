// Tipo any:
let documento: any = "000.000.000-00";
documento = 3;
documento = true;

// Função
const Somar = (n1: number, n2:number): number => {
    return n1 + n2;
}

let numeroSomado: number = Somar(2,5);
console.log(numeroSomado);

// Void (vazio) - Retornos de Funções
const DarBoasVindas = (): void => {
    console.log("ola verônica");
}

DarBoasVindas();