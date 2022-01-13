const section = document.querySelector('section');


const getData = () => [

    { id: 'Cocker', imgSrc: '../../img/Cocker.jpg', bgColor: '#339933' },
    { id: 'Collie', imgSrc: '../../img/Collie.jpg', bgColor: '#339933' },
    { id: 'Francés', imgSrc: '../../img/Francés.jpg', bgColor: '#339933' },
    { id: 'Inglés', imgSrc: '../../img/Inglés.jpg', bgColor: '#F05032' },
    { id: 'Terrier', imgSrc: '../../img/Terrier.jpg', bgColor: '#F05032' },
    { id: 'Hound', imgSrc: '../../img/Hound.jpg', bgColor: '#F05032' },
];

// Funcion de randomizar
const random = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5)

 return cardData;
 
};
random();


const cardCreator = () => {
    const cardData = random();
  
  //Crear elementos HTML
    cardData.forEach((item) => {
      const card = document.createElement('div');
      const front = document.createElement('img');
      const back = document.createElement('div');

     // Agregar clase a los elementos creados
     card.classList = "card";
     front.classList = "front";
     back.classList = "back";

     //Especificar info de las cartas
     front.src = item.imgSrc;

     //Agregar cartas en  section
     section.appenChild(card);
     card.appenChild(front);
     card.appenChild(back);

card.addEventListener('click', (e) => {
  card.classList.toggle('toggleCard');
    });
  });
};

cardCreator();