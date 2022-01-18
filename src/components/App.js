import puppies from '../data/puppies/puppies.js';

const cards = puppies.items;
const doubleCards= cards.concat(cards);
console.log(doubleCards);

function shuffle (array){
  for(let i = array.length - 1 ; i > 0 ;i--){
   let mate = Math.floor(Math.random()*(i+1));
   let tempo = array[i];
   array[i] = array[mate];
   array[mate] = tempo;
   }
  }
  let clickCard = [];
  let matchedCard = [];

  


  const App = () => {
    // CONTENEDOR PADRE DEL JUEGO
    const gameContainer= document.createElement('div');
      gameContainer.className= 'gameContainer';    
    // CONTENEDOR DEL GRID DE CARTAS
      const cardsGrid= document.createElement('div');
      cardsGrid.id = 'cardsGrid';
      cardsGrid.className = 'cardsGrid';
      gameContainer.appendChild(cardsGrid);
      
      // MUESTRA LAS CARTAS DEL GRID
      const gridBoard = function()  {

        cardsGrid.innerHTML = "";
        // RECORRE LA DATA
        for (let i = 0; i < doubleCards.length; i++ );

        // INSERTA IMAGENES EN FRONTFACE Y BACKFACE
        let boardCard = document.createElement('div');
         boardCard.className ='boardCard';
         let backFace = document.createElement('img');
         backFace.setAttribute('src' ,'../img/reverso_carta.png');
         if(doubleCards[i].matched){
          backFace.setAttribute('src', doubleCards[i].image) //segun lo que entiendo si hace un macth se remplaza la imagen del backface por la que hizo match de frontface   
        }
        console.log(backFace)
       //backface queda en el dentro del frontFace 
        frontFace.appendChild(backFace);
       
        backFace.addEventListener('click', function (){
          // si se a clickeado menos de dos cartas se le da un tiempo 
          if (clickCard.length < 2){
            backFace.setAttribute('src', doubleCards[i].image)

                 clickCard.push(doubleCards[i]);
                  setTimeout( () => {
                   flipBack (doubleCards, backFace[i]);
                  },500);
                
                }
                
     });
        //Cardsgrid es padre de frontFace lo que hace que se quede dentro de ese espacio
      cardsGrid.appendChild(frontFace);
      }
    }
  
          gridBoard();
   // tiempo en el que se dan vuelta si no hacen match
      function flipBack(){
        setTimeout(function(){
         matchComplete(clickCard);
       
         },1200);
          }

         
function matchComplete(arrayOfClickCard){
  //si las cartas presionadas son exactamente 2 que nos de true y se añadan al array
  if (arrayOfClickCard.length == 2 ){
    if (arrayOfClickCard[0].id == arrayOfClickCard[1].id){
      arrayOfClickCard[0].matched = true;
      arrayOfClickCard[1].matched = true;
      matchedCard++;
      // si se completaron los match que se abra el modal
          if (matchedCard === 6){
        window.location()//pagina del modal
   
        for (let i = 0 ; i < 11 ; i++ ){//corre la data si no ha encontrado todos los match
          doubleCards[i].matched = false;
         // que se revuelvan las cartas una vez terminado el juego 
          shuffle(doubleCards);
          matchedCard = 0;
        }
      }
      else (gridBoard())
          arrayOfClickCard.length = 0;   

  }
        

}
  return gameContainer
     
};
  
 export default App; 
 export {shuffle};
