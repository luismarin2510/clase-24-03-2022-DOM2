let div = document.querySelector(".container");
let divCaja2 = document.querySelector(".container > div:nth-child(2)");

divCaja2.classList.add('Mystyle');

let Mystyle3 = {
    margin: "auto",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    "font-family": "'Inspiration', bold",
    "font-size": "35px",
    color: "blue",
    "font-weight": 800,
    background: "#2be286"
}
let divCaja3 = document.createElement("DIV");
divCaja3.insertAdjacentText("beforeend", "Caja 3");
Object.assign(divCaja3.style, Mystyle3);

div.insertAdjacentElement("beforeend", divCaja3);

let divCajas = `<div>Caja 4</div><div>Caja 5</div>`;
div.insertAdjacentHTML("beforeend", divCajas);
