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

let clickCard=[];
let matchCard=[];

const gameing = () => {
  //HTML de la página
  const gameContainer= document.createElement('div');
  gameContainer.className= 'gameContainer';    //crear contenedor principal general del juego

  const cardsGrid= document.createElement('div');
  cardsGrid.id = 'cardsGrid';
  cardsGrid.className = 'cardsGrid';
  gameContainer.appendChild(cardsGrid);

  const gridBoard = function (){

    cardsGrid.innerHTML = "";

    for (let i = 0; i < doubleCard.length; i++ );
    console.log(doubleCard);
    let boardCard = document.createElement('div');
    boardCard.className ='boardCard';
    let backFace = document.createElement8('img');
    backFace.setAttribute('src' ,) //insertar imagen de reverso

    if(doubleCard[i].matched){
      backFace.setAttribute('src', doubleCard[i].image) //segun lo que entiendo si hace un macth se remplaza la imagen del backface por la que hizo match de frontface
      
    }

    frontFace.appendChild(backFace);
    backFace.addEventListener('click', function(){
      
    })
    

    

  }

  
}


export default gameing;
export {shuffle};
export {gameing};