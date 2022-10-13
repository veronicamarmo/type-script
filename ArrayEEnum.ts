// Array
let placar1: Array<number> = [7, 1];
let placar2: number[] = [1, 7];

// Tupla - Array misto
// Dados de aluno: nome, data, aprovado
let minhaTupla: [string, number, boolean] = ["Pricila", 9, true]


// Enum - Maquinas de Estados 
enum Acoes {
    Correr,
    Pular,
    Defender,
    Atacar
}

enum Respostas {
    Nao,
    Sim
}

let acaoAtual: Acoes = Acoes.Atacar;

console.log(acaoAtual);
