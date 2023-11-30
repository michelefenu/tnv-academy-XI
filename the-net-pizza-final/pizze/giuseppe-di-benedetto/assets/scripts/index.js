const randomNumber = (min, max) => Math.floor(Math.random() * (max - min) ) + min;

const buildCard = function(piatto){
  return `<div class="wiki" >
             <a class="link" href="../../../../index.html">
             <div class="info-card">
               <img src="${piatto.imageUrl}" class="img-fluid" style = "border-radius: 8px;"
                  alt="${piatto.title}">
              <div class="card-body">
                  <h5 class="card-title">${piatto.title} - ${piatto.price}€</h5>
                  <p class="card-text">${piatto.description}</p>
              </div>
          </div>
      </div>
     </a>
  </div>`;
}

const buildSection = function(menu, numbersOfcards){
  
  const divParentElement = document.getElementById('dishes');
  const selectedIds = [];

  //<div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-5" role="listitem">
  for(let i = 0; i<numbersOfcards; i++){
    let randomIndex;
    do{
      randomIndex = randomNumber(1, menu.length);
    }while(selectedIds.includes(menu[randomIndex].id));

    selectedIds.push(menu[randomIndex].id)

    const randomDishes = menu[randomIndex];

    const cardElement = document.createElement('div');
    cardElement.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3', 'mb-5');
    cardElement.innerHTML = buildCard(randomDishes); 
    divParentElement.appendChild(cardElement);
  }
}



fetch('http://my-json-server.typicode.com/michelefenu/tnv-academy-XI/piatti')
.then(res => res.json())
.then(res => buildSection(res, 3))
.catch(err => console.error('Errore',err))