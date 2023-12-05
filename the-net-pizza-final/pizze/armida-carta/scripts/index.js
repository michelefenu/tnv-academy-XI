const maxID = function(menu){
  let max = 0;
  for(piatto of menu){
      if(max < piatto.id){
          max = piatto.id;
      }
  }
  return max;
}

const buildCard = function(piatto) {
  return `<div class="card shadow">
              <img
                  src="${piatto.imageUrl}"
                  class="card-img-top"
                  alt="${piatto.title}"
              />
              <div class="card-body">
                  <h5 class="card-title">${piatto.title} - ${piatto.price}€</h5>
                  <p class="card-text">
                  ${piatto.description}
                  </p>
              </div>
          </div>`;
}
/*
const buildSection = function(menu, category) {
  const categoryItems = menu.filter(x => x.category === category);
  const divParentElement = document.getElementById(category);

  for(let categoryItem of categoryItems) {
      const cardElement = document.createElement('div');
      cardElement.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');
      cardElement.innerHTML = buildCard(categoryItem);
      divParentElement.appendChild(cardElement);
  }
}
*/


const buildSectionById = function(menu, sectionId, itemId){
  const recomItems = menu.filter(x => x.id===itemId);
  const divParentElement = document.getElementById(sectionId);

  for(let recomItem of recomItems){
      const cardElement = document.createElement('div');
      cardElement.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');
      cardElement.innerHTML=buildCard(recomItem);
      divParentElement.appendChild(cardElement);
  }
}  


//find rand num
const randomNum = function(max){
  return number = Math.floor(Math.random()*max)+1;
}


const buildMenu = function(menu){
  document.getElementById('menu').style.display = 'block';
  let maxIndex = maxID(menu);
  let idRand;

  for(let i=0; i<3;i++){
    idRand= randomNum(maxIndex);
    buildSectionById(menu,'recommended', idRand );
  }
}

fetch('https://my-json-server.typicode.com/michelefenu/tnv-academy-XI/piatti')
.then(res => res.json())
.then(res => buildMenu(res))
.catch(err => console.log('ERRORE'))

