function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) /2;
}

function verificarSituação(media) {

    if (media >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
 }

 let media = calcularMedia(8, 7);
 let resultado = verificarSituação(media);

 console.log(media);
 console.log(resultado);