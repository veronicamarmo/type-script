"use strict";
// Tratamento de erros
try {
    fetch("https://viacep.com.br/ws/11630000/json/")
        .then(response => response.json);
}
catch (erro) {
    console.log('Ops, deu ruim :( ... Salvando erro em logs');
}
