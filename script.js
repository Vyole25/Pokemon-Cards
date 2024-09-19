let url = "https://pokeapi.co/api/v2/pokemon/";

fetch(url)
    .then((response) => response.json())
    .then((data) => {
        crearCard(data.results);
    });

let container = document.getElementById("container");


function crearCard(data) {
    let cardsHTML = "";

    data.forEach((personaje) => {
        cardsHTML += `
        <div class="card">
            <p class="nombre_card">${personaje.name}</p>
            <a class="url" href="${personaje.url}">${personaje.url}</a>
        </div>
        `;
    });

    container.innerHTML = cardsHTML;
}
