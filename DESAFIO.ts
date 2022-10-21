
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


let botao = document.getElementById("botao") as HTMLButtonElement;

// cadastrar


let datax: any = document.getElementById("datadaviagem") as HTMLInputElement;
let pacote = document.getElementById("pacote") as HTMLInputElement;
let descricao_input = document.getElementById("descricao") as HTMLInputElement;



const cadastrar = () => {

    let datav: string = datax.value;
    let pacotex: string = pacote.value;
    let descricao2: string = descricao_input.value;

    let cadastro: Informacao = new Informacao(pacotex, descricao2, new Date(datav), true, guardarinformacao.length + 1)

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
   <div class="botoes"> <button onclick='editar("${guardarinformacao[index].nome}","${guardarinformacao[index].descricao}","${guardarinformacao[index].data}","${guardarinformacao[index].status}","${guardarinformacao[index].id}")' class="botao_editar">editar</button><button onclick="excluir()"class="botao_excluir">excluir</button> </div> </div> `
    }
}

// editar


let pegarId: number

const editar = (nome: string, descricao: string, data: Date, status: boolean, id: number) => {

    console.log(nome, descricao, data, status, id);

    pacote.value = nome
    descricao_input.value = descricao
    datax.value = data
    pegarId = id

    botao.innerHTML = "<button class= 'editar' onclick='editar2()'>Editar</button>"

}

const editar2 = () => {
    let editado = new Informacao(pacote.value, descricao_input.value, new Date(datax.value), false, pegarId)
    guardarinformacao.splice(pegarId - 1, 1, editado)
    lista()
    botao.innerHTML = "<button onclick='cadastrar()' type='subimit' id='botaocadastrar' class='botaoc'>Cadastrar</button>"
}

//excluir

const excluir = (index: number) => {
    //slice - remover
    guardarinformacao.splice(index, 1)
    lista()
}
