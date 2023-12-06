const randomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;



const buildCard = function (piatto) {
  return `<div class="card">
              <img src="${piatto.imageUrl}" class="card-img-top" alt="${piatto.title}">
              <div class="card-body">
                <h5 class="card-title"><a href="${piatto.title}"></a></li>
                <h5 class="card-title">${piatto.title} - ${piatto.price}€</h5>
              </div>
          </div>`;
}

const buildSection = function (menu, numeroCarte) {

  const divParentElement = document.getElementById('piatti');
  const selectedIds = [];

  //<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5">
  for (let i = 0; i < numeroCarte; i++) {
    let randomIndex;
    do {
      randomIndex = randomNumber(1, menu.length);
    } while (selectedIds.includes(menu[randomIndex].id));

    selectedIds.push(menu[randomIndex].id)

    const randomPiatti = menu[randomIndex];

    const cardElement = document.createElement('div');
    cardElement.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-5', 'role="listitem"');
    cardElement.innerHTML = buildCard(randomPiatti);
    divParentElement.appendChild(cardElement);
  }
}

const buildMenu = function(menu) {
    buildSection(menu, 'piatti');
}

fetch('https://my-json-server.typicode.com/michelefenu/tnv-academy-XI/piatti')
.then(res => res.json())
.then(res => buildSection(res, 3))
.catch(err => console.error('Errore', err))