"use strict";
// generics - tipo generico/qualquer
// constraints - limitar
let pessoa = Mesclar({ nome: "Herules" }, { idade: 18 });
function Mesclar(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
function GetProp(obj, key) {
    return obj[key];
}
let nomenclatura = GetProp(pessoa, "nome");
console.log(nomenclatura);
