import App from "./App.js";

const initGame = () => {
  
  //Aquí va función para ocultar la página de inicio
    const startGame = () =>  { 
      document.getElementsByClassName('container');
        container.style.display = 'none';
        document.getElementById('root').appendChild(App());
        
}
   
  
// container padre
const container = document.createElement('div');
  container.className = 'container'; 
  
 //contenedor Título
const title1 = document.createElement('div');
title1.className = 'title1';
container.appendChild(title1); 



//div hijo que almacena el gif animado
const contGif = document.createElement('div');
contGif.className = 'dogSmile';
container.appendChild(contGif); 

  
//div hijo de container que almacena el botón start
     const contStart = document.createElement('div');//   contStart.className = 'start';
     contStart.className = 'start';
     container.appendChild(contStart); 


     contStart.addEventListener('click', startGame);
    
     
     //pié de página
const footer = document.createElement('footer');
footer.textContent= "© 2022 Laboratoria - Creado por Amapola Mory & Mayorlen Ortega"
footer.className = 'footer';
container.appendChild(footer); 

  
  return container;
};

export default initGame;