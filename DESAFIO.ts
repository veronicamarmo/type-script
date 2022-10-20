// class Pacote {
//     nome: string
//     descricao: string
//     data: Date
//     status: boolean
//     id: string

//     constructor(_nome: string, _descricao: string, _data: Date, _status: boolean, _id: string) {
//         this.nome = _nome
//         this.descricao = _descricao
//         this.data = _data
//         this.status = _status
//         this.id = _id
//     }
// }

// let pacotes: Array<Pacote> = []

// fetch('https://62361b7feb166c26eb2f488a.mockapi.io/pacotes', {
//     method: 'GET',
//     headers: { 'Contente-Type': "application/json" }
// })
//     .then(response => response.json())
//     .then(result => {
//         console.log(result);

//         for (let index = 0; index < result.length; index++) {
//             pacotes[index] = new Pacote(result[index].nome, result[index].descricao, new Date(result[index].data), result[index].status, result[index].id)

//         }
//         console.log(pacotes)
//         listar()
//     })

// const cadastrar = () => {
//     listar()
// }

// //! -----> Garanto que não vai ser nulo
// //as -------> converte pra o tipo que eu quiser

// let div = document.getElementById("lista_pacotes") as HTMLElement

// // listar
// //Gera HTML pros pacotes
// const listar = () => {

//     div.innerHTML = "";
//     //map, foreach
//     for (let index = 0; index < pacotes.length; index++) {
//         // ? -----> esse elemento pode ser nulo
//         // ++
//         //Alt + Z
//         div.innerHTML += `<div class="pacote"><h3>${pacotes[index].nome}</h3><p>${pacotes[index].descricao}</p><br><br><p>data da viagem:${pacotes[index].data}</P><br><br><div><button> class="limpar">excluir</button></div></div>`;
//     }
// }

// let 

// fetch
class Informacao {
    nome: string;
    data: Date;
    descricao: string;
    status: boolean;
    id: number;

    constructor(_nome: string, _descricao: string, _data: Date, _status: boolean, _id: number) {
        this.nome = _nome
        this.data = _data
        this.descricao = _descricao
        this.status = _status
        this.id = _id

    }
}

let guardarinformacao: Array<Informacao> = []

fetch('https://62361b7feb166c26eb2f488a.mockapi.io/pacotes', {
    method: 'GET',
    headers: { 'Content-Type': "aplication/json" }
})

    .then(response => response.json())
    .then(api => {
        for (let index = 0; index < api.length; index++) {
            let informacao: Informacao = new Informacao(api[index].nome, api[index].descricao, api[index].data, api[index].id, api[index].status)
            guardarinformacao.push(informacao)
        }
        console.log(guardarinformacao);
        lista()

    })


let botao = document.getElementById("botaocadastrar") as HTMLButtonElement;

// cadastrar


let data = document.getElementById("datadaviagem") as HTMLInputElement;
let pacote = document.getElementById("pacote") as HTMLInputElement;
let descricao = document.getElementById("descricao") as HTMLInputElement;



const cadastrar = () => {

    let datav: string = data.value;
    let pacotex: string = pacote.value;
    let descricao2: string = descricao.value;

    let cadastro: Informacao = new Informacao(pacotex, descricao2, new Date(datav), true, guardarinformacao.length+1)

    guardarinformacao.push(cadastro)
    lista()
}


//listar
let div = document.querySelector(".lista_pacote")!;
const lista = () => {
    div.innerHTML = "";
    for (let index = 0; index < guardarinformacao.length; index++) {
        div.innerHTML += `
   <div class= "pacoteX"><h3>${guardarinformacao[index].nome}</h3><br><br><p class="descricao2">${guardarinformacao[index].descricao}</p> <p class="datav">data da viagem:${guardarinformacao[index].data} </p>
   <br><br>
   <div class="botoes"> <button class="botao_editar">editar</button><button class="botao_excluir">excluir</button> </div> </div>
   
   `
    }
}

// editar




const excluir = (index: number) => {
    //slice - remover
    guardarinformacao.splice(index, 1)
    lista()
}



