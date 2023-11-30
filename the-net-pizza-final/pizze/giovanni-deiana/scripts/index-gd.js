const buildCard = function(piatto) {
    return `<div class="card shadow">
                <div class="card-image">
                <img
                src="${piatto.imageUrl}"
                class="card-img-top"
                alt="${piatto.title}"
                />
                </div>
                <div class="card-body">
                <h5 class="card-title">${piatto.title} - ${piatto.price}€</h5>
                        <p class="card-text">
                        ${piatto.description}
                        </p>
                </div>
            </div>`;
}

const generazioneCasuale = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const min = 1;
const max = 14;
const numPiatti = 3;

const generazionePiatti = (min, max, n) => {
  const idCasuali = [];
  while (idCasuali.length < n) {
    const newId = generazioneCasuale(min, max);
    if (!idCasuali.includes(newId)) {
      idCasuali.push(newId);
    }
  }
  return idCasuali;
};

const piatti = generazionePiatti(min, max, numPiatti);

const buildSection = function(menu, piatti) {
  const divParentElement = document.getElementById('piatti');

  for(let id of piatti){
    const piattoScelto = menu.find(item => item.id === id);
    if(piattoScelto) {
      const cardElement = document.createElement('div');
      cardElement.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-4');
      cardElement.innerHTML = buildCard(piattoScelto);
      divParentElement.appendChild(cardElement);
    }
  }
}

const buildMenu = function(menu) {
  buildSection(menu, piatti);
}

/*const buildSection = function(menu, category) {
    const categoryItems = menu.filter(x => x.category === category);
    const divParentElement = document.getElementById(category);

    for(let categoryItem of categoryItems){
    const cardElement = document.createElement('div');
    cardElement.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-4');
    cardElement.innerHTML = buildCard(categoryItem);
    divParentElement.appendChild(cardElement);
  }
}

const buildMenu = function(menu) {
    buildSection(menu, 'antipasti');
}*/

fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-XI/piatti/')
    .then(res => res.json())
    .then(res => buildMenu(res))
    .catch(err => console.log('Errore nel caricamento dei dati'))
    

