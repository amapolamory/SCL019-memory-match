
const getData= () => [

    { id: 'Cocker', image: '../../img/Cocker.jpg', bgColor: '#339933' },
    { id: 'Collie', image: '../../img/Collie.jpg', bgColor: '#339933' },
    { id: 'Francés', image: '../../img/Francés.jpg', bgColor: '#339933' },
    { id: 'Inglés', image: '../../img/Inglés.jpg', bgColor: '#F05032' },
    { id: 'Terrier', image: '../../img/Terrier.jpg', bgColor: '#F05032' },
    { id: 'Hound', image: '../../img/Hound.jpg', bgColor: '#F05032' },
];
// Funcion de randomizar
const random = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5)
 return cardData  ;
};

random();


const cardCreator = () => {
    const cardData = random();
  
  //Crear elementos HTML
    cardData.forEach((items) => {
      const card= document.createElement('div');
      const front= document.createElement('img');
      const back= document.createElement('div');
    });
};