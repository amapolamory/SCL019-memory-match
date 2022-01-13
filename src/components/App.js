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
import puppies from '../data/puppies/puppies.js';
console.log(puppies);

const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.textContent = 'Hola mundo!';

  return el;
};

export default App;
