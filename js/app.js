const container = document.querySelector(".container")

const cars = [
    { name: "Mclaren 765LT", image: "images/mclaren-765lt.jpg"},
    { name: "Mercedes-Benz 300SL", image: "images/mercedes-300sl.jpg"},
    { name: "Porsche 964 by Singer", image: "images/porsche-singer.jpg"},
    { name: "Porsche Taycan Turbo S", image: "images/porsche-taycan.jpg"},
    { name: "Alfa Romeo Giulia", image: "images/alfa-giulia.jpg"},
    { name: "Alfa Romeo GTA", image: "images/alfa-gta.jpg"},
    { name: "BMW E30 M3", image: "images/bmw-e30.jpg"},
    { name: "Ferrari 380GTB", image: "images/ferrari-380gtb.jpg"},
    { name: "Mclaren 600LT", image: "images/mclaren-600lt.jpg"}
]

const showCars = () => {
    let output = "";
    cars.forEach(
        ({ name, image }) =>
        (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Select</a>
              </div>
              `)
    );
    container.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", showCars);

if ('serviceWorker' in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then(res => console.log("service worker registered"))
            .catch(err => console.log("service worker not registered", err))
    })
}