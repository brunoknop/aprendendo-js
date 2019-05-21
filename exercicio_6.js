const funcionarios = [10,20,30,50];
const sobeEDesce = 1 * 2;
const tempoPorAndar = funcionarios.map(
    function calculaTempo(pessoas, andar) {
        let tempo = 0;
        for (let contador = 0; contador < funcionarios.length; contador++) {
            if (andar>contador) {
                tempo = tempo+funcionarios[contador]*((andar-contador)*sobeEDesce);
            }
            if (andar<contador){
                tempo = tempo+funcionarios[contador]*((contador-andar)*sobeEDesce);
            }
        }
    return tempo
    });

let index = 0;
let contador = 0;
while(contador<tempoPorAndar.length) {
    if (tempoPorAndar[contador]<tempoPorAndar[index]) {
        index=contador;
    }
    else{
        contador++;
    }
    if (index==tempoPorAndar.length){
        break;
    }
}

console.log(index)
console.log(tempoPorAndar)
console.log('o melhor andar é o',index+1,'e ele tem o tempo de',tempoPorAndar[index],'minutos')