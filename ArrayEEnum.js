"use strict";
// Array
let placar1 = [7, 1];
let placar2 = [1, 7];
// Tupla - Array misto
// Dados de aluno: nome, data, aprovado
let minhaTupla = ["Pricila", 9, true];
// Enum - Maquinas de Estados 
var Acoes;
(function (Acoes) {
    Acoes[Acoes["Correr"] = 0] = "Correr";
    Acoes[Acoes["Pular"] = 1] = "Pular";
    Acoes[Acoes["Defender"] = 2] = "Defender";
    Acoes[Acoes["Atacar"] = 3] = "Atacar";
})(Acoes || (Acoes = {}));
var Respostas;
(function (Respostas) {
    Respostas[Respostas["Nao"] = 0] = "Nao";
    Respostas[Respostas["Sim"] = 1] = "Sim";
})(Respostas || (Respostas = {}));
let acaoAtual = Acoes.Atacar;
console.log(acaoAtual);
