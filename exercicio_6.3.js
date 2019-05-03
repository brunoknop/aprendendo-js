const funcionariosPorAndar = [10, 10, 2];

const tempoEntreAcoes = 1;

const sobeEDesce = tempoEntreAcoes * 2;

const tempoPorAndar = funcionariosPorAndar.map(calculaTempo);
const menorTempoCalculado = identificaMenorTempo(tempoPorAndar);

console.log('o melhor andar é o', menorTempoCalculado + 1, 'e ele tem o tempo de', tempoPorAndar[menorTempoCalculado], 'minutos')
console.log(tempoPorAndar)

function calculaTempo(numeroPessoasPorAndar, andar) {
    let tempo = 0;
    for (let contador = 0; contador < funcionariosPorAndar.length; contador++) {
        if (andar > contador) {
            tempo = tempo + funcionariosPorAndar[contador] * ((andar - contador) * sobeEDesce);
        }
        if (andar < contador) {
            tempo = tempo + funcionariosPorAndar[contador] * ((contador - andar) * sobeEDesce);
        }
    }
    return tempo;
}

function identificaMenorTempo(tempoPorAndar) {
    let index = 0;
    let contador = 0;
    while (contador < tempoPorAndar.length) {
        if (tempoPorAndar[contador] < tempoPorAndar[index]) {
            index = contador;
        } else {
            contador++;
        }
    }
    return index;
}