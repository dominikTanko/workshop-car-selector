const container = document.querySelector(".container")

const cars = [
    { name: "Mclaren 765LT", image: "mclaren-765lt.jpg"},
    { name: "Mercedes-Benz 300SL", image: "mercedes-300sl.jpg"},
    { name: "Porsche 964 by Singer", image: "porsche-singer.jpg"},
    { name: "Porsche Taycan Turbo S", image: "porsche-taycan.jpg"},
    { name: "Alfa Romeo Giulia", image: "alfa-giulia.jpg"},
    { name: "Alfa Romeo GTA", image: "alfa-gta.jpg"},
    { name: "BMW E30 M3", image: "bmw-e30.jpg"},
    { name: "Ferrari 380GTB", image: "ferrari-380gtb.jpg"},
    { name: "Mclaren 600LT", image: "mclaren-600lt.jpg"}
]

const showCars = () => {
    let output = "";
    cars.forEach(
        ({ name, image }) =>
        (output += `
                <div class="card">
                    <img class="card--avatar" src=${image} />
                    <h1 class="card--title">${name}</h1>
                    <a class="card--link" href="#">View</a>
                </di>
                `)
    );
    container.innerHTML = output;
}

document.addEventListener("DOMContentLoaded", showCars);