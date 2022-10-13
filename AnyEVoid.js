"use strict";
// Tipo any:
let documento = "000.000.000-00";
documento = 3;
documento = true;
// Função
const Somar = (n1, n2) => {
    return n1 + n2;
};
let numeroSomado = Somar(2, 5);
console.log(numeroSomado);
// Void (vazio) - Retornos de Funções
const DarBoasVindas = () => {
    console.log("ola verônica");
};
DarBoasVindas();
