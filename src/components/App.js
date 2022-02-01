import puppies from "../data/puppies/puppies.js";


const cards = puppies.items;
const doubleCards = cards.concat(cards); // almacenamos las cartas duplicadas (cards+cards)

// aleotizar cartas
const shuffle = () => {
  const cardData = doubleCards;
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

shuffle();

// Declaramos dos arrays: 1)Cartas clickeadas 2)Match
let clickCard = [];
let matchedCard = []; //Guarda la cantidad de cartas que han hecho match


// Función para crear estructura y añadir funcionalidad al juego
const App = () => {

   const countDown = () => {
    let time = 60;

    setInterval(() => {
      let timeGame = time--;
      console.log(timeGame);

      const show = () => {
        minute.innerHTML = timeGame;
      };

      if(timeGame==55){
          modalCont2.style.display= 'block';
      }
 
      const clear = () =>{
        window.clearInterval(timeGame)
      }

       clear();
      show();
    }, 1000);
  };
  

  

  // contenedor padre del juego
  const gameContainer = document.createElement("div");
  gameContainer.className = "gameContainer";

  // Elementos externos del juego

  const titleGame = document.createElement("div");
  titleGame.className = "titleGame";
  titleGame.textContent = "Puppy Match";
  gameContainer.appendChild(titleGame);

  const timeMove = document.createElement("div");
  timeMove.className = "timeMove";
  gameContainer.appendChild(timeMove);

  const chronos = document.createElement("div");
  chronos.className = "chronos";
  chronos.id = "chronos";
  gameContainer.appendChild(chronos);
  chronos.addEventListener("click", countDown);


  const timer = document.createElement("div");
  timer.className = "timer";
  timer.id = "timer";
  timer.textContent = "Timer: ";
  timeMove.appendChild(timer);

  const minute = document.createElement("span");
  minute.id = "minute";
  timer.appendChild(minute);

  const moves = document.createElement("div");
  moves.className = "moves";
  moves.textContent = "Moves:";
  timeMove.appendChild(moves);

  const countMoves = document.createElement("span");
  countMoves.id = "countMoves";
  countMoves.textContent = " 0";
  moves.appendChild(countMoves);




  const instruction = document.createElement("div");
  instruction.className = "instruction";
  gameContainer.appendChild(instruction);

  const dogLeft = document.createElement("div");
  dogLeft.className = "dogLeft";
  gameContainer.appendChild(dogLeft);

  const dogRight = document.createElement("div");
  dogRight.className = "dogRigth";
  gameContainer.appendChild(dogRight);

  // Modal Ganador



  const modalCont = document.createElement("div");
  modalCont.className = "modalCont";
  gameContainer.appendChild(modalCont);

  const modalInt = document.createElement("div");
  modalInt.className = "modalInt";
  modalCont.appendChild(modalInt);

  const modalHead = document.createElement("div");
  modalHead.className = "modalHead";
  modalInt.appendChild(modalHead);

  const close = document.createElement("span");
  close.className = "close";
  close.id = "close";
  close.textContent = "x";
  modalHead.appendChild(close)
  const closeModal = () => {
    document.getElementById(modalCont);
    modalCont.style.display = 'none';
  };
  closeModal();

  close.addEventListener("click", closeModal);

  const modalTitle = document.createElement("div");
  modalTitle.className = "modalTitle";
  modalTitle.textContent = "You Win!";
  modalHead.appendChild(modalTitle);

  const dogWin = document.createElement("div");
  dogWin.className = "dogWin";
  modalInt.appendChild(dogWin);

  const restart = document.createElement("button");
  restart.className = "restart";
  modalInt.appendChild(restart);
  restart.id = "restart";
  restart.textContent = "Restart";

  //Modal Perdedor

  const modalCont2 = document.createElement('div');
  modalCont2.className= 'modalCont2';
  gameContainer.appendChild(modalCont2);
 

  const modalInt2 = document.createElement('div');
  modalInt2.className=  'modalInt2';
  modalCont2.appendChild(modalInt2);

  const modalHead2 = document.createElement("div");
  modalHead2.className = "modalHead2";
  modalInt2.appendChild(modalHead2);



  const modalTitle2 = document.createElement("div");
  modalTitle2.className = "modalTitle";
  modalTitle2.textContent = "You Lose!";
  modalHead2.appendChild(modalTitle2);

  const dogLose = document.createElement("div");
  dogLose.className = "dogLose";
  modalInt2.appendChild(dogLose);

  const restart2 = document.createElement("button");
  restart2.className = "restart2";
  modalInt2.appendChild(restart2);
  restart2.id = "restart2";
  restart2.textContent = "Restart";
  
  const close2 = document.createElement("span");
  close2.className = "close2";
  close2.id = "close2";
  close2.textContent = "x";
  modalHead2.appendChild(close2);

  const closeModal2 = () => {
    document.getElementById(modalCont2);
    modalCont2.style.display = 'none';
  };
  closeModal2();

  close2.addEventListener("click", closeModal2);


  



  // CONTENEDOR DEL GRID DE CARTAS
  const cardsGrid = document.createElement("div");
  cardsGrid.id = "cardsGrid";
  cardsGrid.className = "cardsGrid";
  gameContainer.appendChild(cardsGrid); //cardsGrid se crea como hijo de gameContainer

  // FUNCIÓN QUE MUESTRA LAS CARTAS DEL GRID
  const gridBoard = function () {
    cardsGrid.innerHTML = "";
    // RECORRE LA DATA
    for (let i = 0; i < doubleCards.length; i++) {
      // INSERTA IMAGENES EN FRONTFACE Y BACKFACE
      let boardCard = document.createElement("div");
      boardCard.className = "boardCard";
      cardsGrid.appendChild(boardCard);

      let backFace = document.createElement("img");
      boardCard.appendChild(backFace);
      backFace.setAttribute("src", "./img/reverso_carta.png");

      let frontFace = document.createElement("div");

      //segun lo que entiendo si hace un match se remplaza la imagen del backface permanentemente para que no se de vuelta
      //por la que hizo match de frontface
      if (doubleCards[i].matched) {
        backFace.setAttribute("src", doubleCards[i].image);
      }
      //backface queda en el dentro del frontFace
      boardCard.appendChild(frontFace);
      frontFace.appendChild(backFace);

      backFace.addEventListener("click", function () {
        //función que permite clickear una carta
        if (clickCard.length < 2) {
          //Sólo se puede clickear 2 cartas cada vez
          backFace.setAttribute("src", doubleCards[i].image); //Muestra imagen de carta cuando se gira
          console.log(backFace);
          clickCard.push(doubleCards[i]); //Guarda cartas clickeadas en array declarado
          setTimeout(() => {
            //Define el tiempo del giro de carta
            flipBack(doubleCards, backFace[i]);
          }, 500);

          // Función restart desde el modal
          // const restartF = () => {
          //   restart.addEventListener("click", gridBoard);
          // };
          // restartF();

      

          if(clickCard.length==2){
            const movements = () => {

              let movesCounter = 0;
              movesCounter = movesCounter+1;
              
              const updateDisplay= () => {
                countMoves.innerHTML = movesCounter;
              };
        
             
              updateDisplay();
            console.log(movesCounter);
            return movesCounter++;
            
    
          };
          movements();

          }
        }
      });
    }
  };
  

  // tiempo en el que se dan vuelta si no hacen match
  function flipBack() {
    setTimeout(function () {
      matchComplete(clickCard);
    }, 1200);
  }

  //Función para todos los match (ganar el juego)
  function matchComplete(arrayOfClickCard) {
    //si las cartas presionadas son exactamente 2 que nos de true y se añadan al array
    if (arrayOfClickCard.length == 2) {
     
      //Si la primera carta es igual a la segunda
      if (arrayOfClickCard[0].id == arrayOfClickCard[1].id) {
        arrayOfClickCard[0].matched = true;
        arrayOfClickCard[1].matched = true;
        console.log(JSON.stringify(arrayOfClickCard));
        matchedCard++;
        // si se completaron los 6 match que se abra el modal
        if (matchedCard === 6) {
          
          //  direccionar al modal
          const modal = () => {
            modalCont.style.display = "block";
            clearInterval(titleGame);
                      };
          modal();

          for (let i = 0; i < 12; i++) {
            // Impide hacer match sobre match y activa shuffle
            doubleCards[i].matched = false;

            // que se revuelvan las cartas una vez terminado el juego
            shuffle(doubleCards);
            matchedCard = 0;
          }
        }
      }
      // Reiniciar función para jugar desde 0
      else gridBoard();
      arrayOfClickCard.length = 0;
      
       // Función restart desde el modal
       
    }

    
  }
 gridBoard();
 
  const restartF = () => {
    restart.addEventListener("click",gridBoard);
    restart.addEventListener("click", closeModal);
    

    
    
  };
  restartF();

  const restartF2 = () => {
    restart2.addEventListener("click",gridBoard);
    restart2.addEventListener("click", closeModal2);
    
  };
  restartF2();



  return gameContainer;

  
};

export default App;
export { shuffle };
export { App };
