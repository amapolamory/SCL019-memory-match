import puppies from '../data/puppies/puppies.js';

const cards = puppies.items;  
const doubleCards= cards.concat(cards); // almacenamos las cartas duplicadas (cards+cards)

// aleotizar cartas
const shuffle = () => {
  const cardData = doubleCards;
  cardData.sort(() => Math.random() - 0.5)
  return cardData;

};

shuffle();

  
  // Declaramos dos arrays: 1)Cartas clickeadas 2)Match 
  let clickCard = [];
  let matchedCard = [];
 
  

  // Función para crear estructura y añadir funcionalidad al juego
  const App = () => {


  // CONTENEDOR PADRE DEL JUEGO
    const gameContainer= document.createElement('div');
    gameContainer.className= 'gameContainer';   

  // Elementos externos del juego

      const titleGame = document.createElement('div');
      titleGame.className = 'titleGame';
      titleGame.textContent = 'Puppy Match';
      gameContainer.appendChild(titleGame);

      const timeMove = document.createElement('div');
      timeMove.className = 'timeMove';
      gameContainer.appendChild(timeMove);
       
      const timer = document.createElement('div');
      timer.className = 'timer';
      timer.textContent= 'Timer';
      timeMove.appendChild(timer);

      const chrono = document.createElement('div');
      chrono.className = 'chrono';
      gameContainer.appendChild(chrono);

      const moves = document.createElement('div');
      moves.className = 'moves';
      moves.textContent= 'Moves';
      timeMove.appendChild(moves);

      const instruction = document.createElement('div');
      instruction.className = 'instruction';
      gameContainer.appendChild(instruction);

      const dogLeft = document.createElement('div');
      dogLeft.className = 'dogLeft';
      gameContainer.appendChild(dogLeft);

      const dogRight = document.createElement('div');
      dogRight.className = 'dogRigth';
      gameContainer.appendChild(dogRight);

      

      

  // CONTENEDOR DEL GRID DE CARTAS
      const cardsGrid= document.createElement('div');
      cardsGrid.id = 'cardsGrid';
      cardsGrid.className = 'cardsGrid';
      gameContainer.appendChild(cardsGrid); //cardsGrid se crea como hijo de gameContainer 
    
     
           
  // FUNCIÓN QUE MUESTRA LAS CARTAS DEL GRID
      const gridBoard = function() {

        cardsGrid.innerHTML = "";
  // RECORRE LA DATA
        for (let i = 0; i < doubleCards.length; i++ ){

  // INSERTA IMAGENES EN FRONTFACE Y BACKFACE
         let boardCard = document.createElement('div');
         boardCard.className ='boardCard';
         cardsGrid.appendChild(boardCard);

         let backFace = document.createElement('img');
         boardCard.appendChild(backFace)
         backFace.setAttribute('src' ,'./img/reverso_carta.png');
         

         let frontFace = document.createElement('div');

          //segun lo que entiendo si hace un match se remplaza la imagen del backface 
          //por la que hizo match de frontface   
         if(doubleCards[i].matched){
          backFace.setAttribute('src', doubleCards[i].image)
        }
         //backface queda en el dentro del frontFace 
         boardCard.appendChild(frontFace);
        frontFace.appendChild(backFace); 
       
        backFace.addEventListener('click', function (){ //función que permite clickear una carta
            if (clickCard.length < 2){                  //Sólo se puede clickear 2 cartas cada vez
            backFace.setAttribute('src', doubleCards[i].image) //Muestra imagen de carta cuando se gira

                 clickCard.push(doubleCards[i]); //Guarda cartas clickeadas en array declarado
                  setTimeout( () => {            //Define el tiempo del giro de carta
                   flipBack (doubleCards, backFace[i]);
                  },500);
                }
              });
             }
           }
    gridBoard();
   
    // tiempo en el que se dan vuelta si no hacen match
      function flipBack(){
        setTimeout(function(){
         matchComplete(clickCard);
       
         },1200);
      }

   //Función para todos los match (ganar el juego)      
function matchComplete(arrayOfClickCard){
  //si las cartas presionadas son exactamente 2 que nos de true y se añadan al array
  if (arrayOfClickCard.length == 2 ){
    //Si la primera carta es igual a la segunda
    if (arrayOfClickCard[0].id == arrayOfClickCard[1].id){
      arrayOfClickCard[0].matched = true;
      arrayOfClickCard[1].matched = true;
      matchedCard++;
      // si se completaron los 6 match que se abra el modal
          if (matchedCard === 6){
        // window.location()//pagina del modal
   
        for (let i = 0 ; i <= 11 ; i++ ){//recorre la data si no ha encontrado todos los match
          doubleCards[i].matched = false;

         // que se revuelvan las cartas una vez terminado el juego 
          shuffle(doubleCards);
          matchedCard = 0;
        }
      }
    }
      //Reiniciar función para jugar desde 0
      else (gridBoard())
          arrayOfClickCard.length = 0;   
  }
        

}
  return gameContainer

};
 export default App; 
 export {shuffle};
 export {App};