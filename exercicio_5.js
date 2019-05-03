//RESOLUÇÃO EM UMA FUNÇÃO
//------------------------------
// const valores = [3,2,0,5,7]
// valores.sort();
// valores.reverse();
// console.log(valores)
//------------------------------
const valores = [];


for(let ind = 0; ind< 10000000; ind++) valores.push(Math.round(Math.random() * 100000));

// const valoresOrdenados = 

// function ordenaValores(valor, index) {
//     let posicao = valores.length-1;
//     for (let contador = 0; contador < valores.length; contador++) {
//         if (valor>valores[contador]) {
//             valor = valores[contador];
//         }
//     }
//     console.log(valor);
//     return valor
// }

function ordenaValoresScrini(valor, index, valoresSaida) {
    for (let contador = 0; contador < valores.length; contador++) {
        if (contador != index && valor > valores[contador]) {
            let aux = valores[index];
            valores[index] = valores[contador];
            valores[contador] = aux;
        }
    }
}

function bubbleSort(arr){
    var len = arr.length;
    for (var i = len-1; i>=0; i--){
      for(var j = 1; j<=i; j++){
        if(arr[j-1]>arr[j]){
            var temp = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    return arr;
 }

 function quickSort(arr, left, right){
    var len = arr.length, 
    pivot,
    partitionIndex;
 
 
   if(left < right){
     pivot = right;
     partitionIndex = partition(arr, pivot, left, right);
     
    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
   }
   return arr;
 }
   

 function partition(arr, pivot, left, right){
    var pivotValue = arr[pivot],
        partitionIndex = left;
 
    for(var i = left; i < right; i++){
     if(arr[i] < pivotValue){
       swap(arr, i, partitionIndex);
       partitionIndex++;
     }
   }
   swap(arr, right, partitionIndex);
   return partitionIndex;
 }

 function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
 }

// console.log(new Date());
console.log(new Date());
// bubbleSort(valores);
quickSort(valores);
valores.sort();
console.log(new Date());
// valores.map(ordenaValoresScrini);
// console.log(new Date());
// console.log(new Date());

// 2019-05-03T02:31:17.277Z
// 2019-05-03T02:31:17.293Z
