// generics - tipo generico/qualquer
// constraints - limitar

let pessoa = Mesclar(
    { nome: "Herules" },
    { idade: 18 }
);

function Mesclar<U extends object, V extends object>(obj1: U, obj2: V) {
    return {
        ...obj1,
        ...obj2
    }
}

function GetProp<T extends object, K extends keyof T>(obj: T, key: K){
    return obj[key];
}

let nomenclatura = GetProp(pessoa, "nome")

console.log(nomenclatura);
