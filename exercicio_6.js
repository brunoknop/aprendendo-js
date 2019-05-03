const andar1 = 10;
const andar2 = 20;
const andar3 = 30;
const tempoPorAndar = 1;
const tempoAndar1 = (andar3*(4*tempoPorAndar))+(andar2*(2*tempoPorAndar))
const tempoAndar2 = (andar1*(2*tempoPorAndar))+(andar3*(2*tempoPorAndar))
const tempoAndar3 = (andar1*(4*tempoPorAndar))+(andar2*(2*tempoPorAndar))

console.log(tempoAndar1)
console.log(tempoAndar2)
console.log(tempoAndar3)

if(tempoAndar1<tempoAndar2 && tempoAndar1<tempoAndar3){
    console.log('eh melhor instalar no primeiro andar, onde o melhor tempo eh de ',tempoAndar1,' segundos.')
}
if(tempoAndar2<=tempoAndar1 && tempoAndar2<=tempoAndar3){
    console.log('eh melhor instalar no segundo andar, onde o melhor tempo eh de ',tempoAndar2,' segundos.')
}
if(tempoAndar3<tempoAndar1 && tempoAndar3<tempoAndar2){
    console.log('eh melhor instalar no terceiro andar, onde o melhor tempo eh de ',tempoAndar3,' segundos.')
}