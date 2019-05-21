// function constroiPiramide(tamanhoPiramide) {
//     for (var quantidaDeColunas = 1; quantidaDeColunas <= tamanhoPiramide; quantidaDeColunas++) {
//         for (var quantidadeDeLinhas = 0; quantidadeDeLinhas < quantidaDeColunas; quantidadeDeLinhas++) {
//             console.log('*');   
//         }
//         console.log('x');
//     }
//     for (var quantidaDeColunas = tamanhoPiramide-1; quantidaDeColunas > 0; quantidaDeColunas=quantidaDeColunas-1) {
//         for (var quantidadeDeLinhas = 0; quantidadeDeLinhas < quantidaDeColunas; quantidadeDeLinhas++) {
//             console.log('*');   
//         }
//         console.log(<br></br>);
//     }
// }
function constroiPiramide(tamanho) {
    //let asterisco = [['*'],['*','*'],['*','*','*'],['*','*','*','*'],['*','*','*','*','*']];
    let asterisco = [];
    for(let contArray = 0; contArray < tamanho; contArray++) {
        asterisco.push(['*']);
        // for(let contAst = 0; contAst < contArray; contAst++){
        // }
    }
console.log(asterisco)
    // for (let contadorIda = 0; contadorIda < tamanho; contadorIda++) {
    //      console.dir(asterisco[contadorIda].join(''));
    // }
}
constroiPiramide(5);