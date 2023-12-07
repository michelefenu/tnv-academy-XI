const buildCard = function (piatto) {
    const textColor = "#730217";

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
                    <p class="card-text" style="color: ${textColor};">
                        ${piatto.description}
                    </p>
                </div>
            </div>`;
};

const generaId = () => {
    const numeroCasuale = Math.random();
    const idGenerato = Math.floor(numeroCasuale * 14) + 1;
    return idGenerato;
};

const piattiRandom = () => {
    const maxPiatti = 3;
    const idPiatti = [];

    for (let i = 0; i < maxPiatti; i++) {
        const idRandom = generaId();

        if (!idPiatti.includes(idRandom)) {
            idPiatti.push(idRandom);
        } else {
            i--;
        }
    }
    return idPiatti;
};

const piattiConsigliati = piattiRandom();

const buildConsigliati = function (idPiatti, menu) {
    const divParentElement = document.getElementById('piatti');

    for (let idPiatto of idPiatti) {
        const piattoCorrispondente = menu.find(piatto => piatto.id === idPiatto);

        if (piattoCorrispondente) {
            const cardElement = document.createElement('div');
            cardElement.classList.add('col-12', 'col-sm-6', 'col-md-4', 'py-2');
            cardElement.innerHTML = buildCard(piattoCorrispondente);
            divParentElement.appendChild(cardElement);
        }
    }
};

const buildMenu = function (menu) {
   
   buildConsigliati(piattiConsigliati, menu);
}


fetch('https://my-json-server.typicode.com/michelefenu/tnv-academy-XI/piatti/')
    .then(res => res.json())
    .then(res => buildMenu(res))
    .catch(err => console.log('Errore nel caricamento dei dati'));
