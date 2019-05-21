const matriz1 = [[1,2,3,7,5],
                [5,6,7,0,9],
                [9,0,1,4,8],
                [7,2,3,7,6],
                [1,2,8,7,5]];

function indentificaZeroMatriz(matriz) {
    let coordenadasZeros = [];
    for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
        for (let indiceValor = 0; indiceValor < matriz[indiceLinha].length; indiceValor ++) {
            if (matriz[indiceLinha][indiceValor] === 0) {
                coordenadasZeros.push([indiceLinha, indiceValor]);
            }
        }
    }
    zeraColuna(matriz, coordenadasZeros);
    zeraLinha(matriz, coordenadasZeros);
}

function zeraColuna(matriz, coordenadas) {
    for (let zeroEncontrado = 0; zeroEncontrado < coordenadas.length; zeroEncontrado++){
        for (let linha = 0; linha < matriz.length; linha++){
            matriz[linha][coordenadas[zeroEncontrado][1]] = 0;
        }
    }
}
function zeraLinha(matriz, coordenadas) {
    for (let zeroEncontrado = 0; zeroEncontrado < coordenadas.length; zeroEncontrado++){
        for (let coluna = 0; coluna < matriz[zeroEncontrado].length; coluna++){
            matriz[coordenadas[zeroEncontrado][0]][coluna] = 0;
        }
    }
}
indentificaZeroMatriz(matriz1);
console.log(matriz1);