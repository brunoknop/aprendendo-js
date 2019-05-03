const matriz = [[1,2,3],
                [5,6,7],
                [9,0,1]];
//const novaMatriz = matriz.map(zeraMatriz)
// function zeraMatriz (elemento){
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
    for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
        for (let indiceValor = 0; indiceValor < matriz[indiceLinha].length; indiceValor ++) {
            if (matriz[indiceLinha][indiceValor] === 0) {
                flag = zeraMatriz(matriz,indiceLinha, indiceValor);
            }
        }
    }
}

function zeraMatriz(matriz, linha, coluna) {
    // Zerar toda coluna
    for (let indiceLinha = 0; indiceLinha < matriz.length; indiceLinha++){
        matriz[indiceLinha][coluna] = 0;
    }
    // Zerar toda linha
    for (let indiceValor = 0; indiceValor < matriz[linha].length; indiceValor ++) {
        matriz[linha][indiceValor] = 0;
    }
}


indentificaZeroMatriz(matriz);
