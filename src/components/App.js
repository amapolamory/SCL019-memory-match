//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
// O alternativamente podríamos cargar el JSON de forma asíncrona usando
// `fetch` en el momento que consideremos necesario.
//
// fetch('./data/pokemon/pokemon.json')
//   .then(resp => resp.json())
//   .then(console.log)
//   .catch(console.error);
//


import gameing from './match.js';// play es una funcion que debemos actualizar
const App = () => {

  //Aquí va función para ocultar la página de inicio
  const startGame = () => { 
        
    document.getElementsByClassName('container');
    container.style.display = 'none';
    document.getElementById('root').appendChild(gameing()); 
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
     contStart.addEventListener('click', startGame); 
     container.appendChild(contStart); 

//pié de página
//   const footer = document.createElement('footer')
//   footer.textContent= "© 2022 Laboratoria - Creado por Amapola Mory & Mayorlen Ortega"
//   footer.className = 'footer';
//   container.appendChild(footer); 

   
  return container;
};
  

export default App;