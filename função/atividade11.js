function verificarIdade(idade) {

    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

let resultado = verificarIdade(17);
console.log (resultado);