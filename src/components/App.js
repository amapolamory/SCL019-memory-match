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


import play from './match.js';// play es una funcion que debemos actualizar
const App = () => {

  //Aquí va función para ocultar la página de inicio
  const startGame = () => { 
        
    document.getElementsByClassName('container');
    container.style.display = 'none';
    document.getElementById('root').appendChild(play()); //reemplazar 'play'
    }

// container padre
const container = document.createElement('div');
container.className = 'container'; 

//div hijo que almacena el título
const contTitle = document.createElement('div');
  contTitle.className = 'title';
  container.appendChild(contTitle); 

  //div hijo que almacena el gif animado
    const contGift = document.createElement('div');
  containerPikachu.className = 'dogSmile';
  container.appendChild(contGift); 

  
  // div hijo de container que almacena el botón start
  const contStart = document.createElement('div');
  subContainer.className = 'start';
  subContainer.addEventListener('click', startBtn); //reemplazar 'startBtn' por nuestra función
  container.appendChild(constStart); 

  //pié de página
  const footer = document.createElement('footer')
  footer.textContent= "© 2022 Laboratoria - Creado por Amapola Mory & Mayorlen Ortega"
  footer.className = 'footer';
  container.appendChild(footer); 

   
  return container;
};
  

export default App;