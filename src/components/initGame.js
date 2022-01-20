

const initGame = () => {
  

  //Aquí va función para ocultar la página de inicio
     const startGame = () => { 
        
    document.getElementsByClassName('modal');
    modal.style.display = 'none';
    //document.getElementById('root').appendChild(initGame()); 
    }
    
  
// container padre
const modalContainer = document.createElement('div');
  modalContainer.className = 'modalContainer'; 
  
  const modal = document.createElement('div');
  modal.className = 'modal';
  modalContainer.appendChild(modal);

//contenedor Título
const title1 = document.createElement('div');
title1.className = 'title1';
modal.appendChild(title1); 



//div hijo que almacena el gif animado
const contGif = document.createElement('div');
contGif.className = 'dogSmile';
modal.appendChild(contGif); 

  
//div hijo de container que almacena el botón start
     const contStart = document.createElement('div');//   contStart.className = 'start';
     contStart.className = 'start';
     modal.appendChild(contStart); 


     contStart.addEventListener('click', startGame);
    // contStart.addEventListener('click', App);
     
     //pié de página
const footer = document.createElement('footer');
footer.textContent= "© 2022 Laboratoria - Creado por Amapola Mory & Mayorlen Ortega"
footer.className = 'footer';
modal.appendChild(footer); 

  
  return modal;
};

export default initGame;