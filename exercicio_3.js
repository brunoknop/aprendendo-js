const arrayDeValores = [20,10,50,25,90,3];

function mediaArrays(entradaArrays) {
    let soma = 0
    for (let contador = 0; contador < arrayDeValores.length; contador++) {
        soma = soma+arrayDeValores[contador];
    }
    return soma = soma/arrayDeValores.length;
}
console.log(mediaArrays(arrayDeValores))