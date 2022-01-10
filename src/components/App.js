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

//const App = () => {
 // const el = document.createElement('div');

//   el.className = 'App';
//   el.textContent = 'Hola mundo!';

//   return el;
// };
  // const puppImg = document.createElement('section');
  // puppImg.className = 'memory-cards';
  // puppImg.textContent = 'Pupy Match';
   // return puppImg;

import puppies from '../data/puppies/puppies.js';
console.log(puppies);

const getData = () => [puppies];
  cardData.forEach((items) => {
    const card= document.createElement('div');
    const front= document.createElement('img');
    const back= document.createElement('div');
  });
const App = () => {
  const cardData= puppies;
  

  


};


export default App;
