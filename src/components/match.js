import puppies from '../data/puppies/puppies.js';
//Llamamos a los items del js de puppies
const cards= puppies.items;
//duplicar las cartas
const doubleCard= cards.concat(cards);

function shuffle (array){
  for(let i = array.length-1 ; i > 0 ;i--){
    let mate = Math.floor(Math.random()*(i+1));
    let tempo = array[i];
    array[i]= array[j];
    array[j] = tempo;
  }
  console.log(shuffle)


}


export default play;
export {shuffle};
export {play};