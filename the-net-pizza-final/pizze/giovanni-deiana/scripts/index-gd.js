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

// <div class="col-12 col-sm-6 col-md-4 py-2">
  const buildSection = function(menu, category) {
    const categoryItems = menu.filter(x => x.category === category);
    const divParentElement = document.getElementById(category);

    for(let categoryItem of categoryItems){
    const cardElement = document.createElement('div');
    cardElement.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');
    cardElement.innerHTML = buildCard(categoryItem);
    divParentElement.appendChild(cardElement);
  }
}

const buildMenu = function(menu) {
    buildSection(menu, 'antipasti');
    buildSection(menu, 'primi');
    buildSection(menu, 'dolci'); 
}

fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-XI/piatti/')
    .then(res => res.json())
    .then(res => buildMenu(res))
    .catch(err => console.log('Errore nel caricamento dei dati'))
    

