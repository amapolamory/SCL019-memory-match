
// //Llamamos a los items del js de puppies
// const cards= puppies.items;
// //duplicar las cartas
// const doubleCard= cards.concat(cards);

// function shuffle (array){
//   for(let i = array.length-1 ; i > 0 ;i--){
//     let mate = Math.floor(Math.random()*(i+1));
//     let tempo = array[i];
//     array[i]= array[mate];
//     array[mate] = tempo;
//   }
//   console.log(shuffle)


// }

// let clickCard=[];
// let matchedCard=[];

// const gameing = () => {
//   //HTML de la página
//   const gameContainer= document.createElement('div');
//   gameContainer.className= 'gameContainer';    //crear contenedor principal general del juego

//   const cardsGrid= document.createElement('div');
//   cardsGrid.id = 'cardsGrid';
//   cardsGrid.className = 'cardsGrid';
//   gameContainer.appendChild(cardsGrid);

//   const gridBoard = () => {

//     cardsGrid.innerHTML = "";

//     for (let i = 0; i < doubleCard.length; i++ );
//     console.log(doubleCard);
//     let boardCard = document.createElement('div');
//     boardCard.className ='boardCard';
//     let backFace = document.createElement8('img');
//     backFace.setAttribute('src' ,'../img/reverso_carta.png');//insertar imagen de reverso
// console.log(backFace)
//     if(doubleCard[i].matched){
//       backFace.setAttribute('src', doubleCard[i].image) //segun lo que entiendo si hace un macth se remplaza la imagen del backface por la que hizo match de frontface
      
//     }

//     frontFace.appendChild(backFace);
//     backFace.addEventListener('click', function(){
//       if (clickCard.length < 2){
//         backFace.setAttribute('src', doubleCard[i].image);
//         clickCard.push(doubleCard[i]);
//         setTimeout( () => {
//           flipBack (doubleCard, backFace[i]);
//         },500);
//       }
//     });

//     cardsGrid.appendChild(frontFace)
    

//   }
// }



// function flipBack(){
//   setTimeout(function(){
//     matchComplete(clickCard);

//   },1200);

// }

// function matchComplete(arrayOfClickCard){
//   if (arrayOfClickCard.length == 2 ){
//     if (arrayOfClickCard[0].id == arrayOfClickCard[1].id){
//       arrayOfClickCard[0].matched = true;
//       arrayOfClickCard[1].matched = true;
//       matchedCard++;
// //       if (matchedCard === 6){
//         // cardsGrid.style.display='none';// este es para hacer desaparecer la pagina una vez que ganas 
//         // endPopUp.style.display='block';// ya que haremos un popUp no se si esto sera util
//         for (let i = 0 ; i < 11 ; i++ ){//corre la data si no ha encontrado todos los match
//           doubleCard[i].matched = false;
        
        // }
      //   shuffle(doubleCard);
      //   matchedCard = 0;
      // }
      // else(gridBoard())
      //   arrayOfClickCard.length = 0;

    
//     }
//   }
//  return gameContainer;
// }


//  export default gameing;
//  export {shuffle};
//  export {gameing};