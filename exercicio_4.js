const matriz1 = [[1,2,3],
                [5,6,7],
                [9,0,1]];
//const novaMatriz = matriz.map(zeraColuna)
// function zeraColuna (elemento){
//     let index=0;
//     let item=0;
//     for (let contador1 = 0; contador1 < matriz[index].length; contador1++) {
//         if (matriz[index][contador1] == 0) {
//             for (let contador2 = 0; contador2 < array[index].length; contador2++) {
//                 novaMatriz= 0;
//             }
//         }index++
//     }
// }

// [[1,2,3,4],  [[1,0,3,4],
//  [5,6,7,8],   [5,0,7,8],
//  [9,0,1,2]];  [0,0,0,0]];

function indentificaZeroMatriz(matriz) {
    let colunaZero = 0;
    let linhaZero = 0;
    for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
        for (let indiceValor = 0; indiceValor < matriz[indiceLinha].length; indiceValor ++) {
            if (matriz[indiceLinha][indiceValor] === 0) {
                flag = zeraColuna(matriz,indiceLinha, indiceValor);
                colunaZero = indiceValor;
                linhaZero = indiceLinha;
            }
        }
    }
    flag = zeraLinha(matriz,linhaZero, colunaZero);
}

function zeraColuna(matriz, linha, coluna) {
    for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
        matriz[indiceLinha][coluna] = 0;
    }
}
function zeraLinha(matriz, linha, coluna) {
    for (let indiceValor = 0; indiceValor < matriz[linha].length; indiceValor ++) {
        matriz[linha][indiceValor] = 0;
    }
}


indentificaZeroMatriz(matriz1);

console.log (matriz1)