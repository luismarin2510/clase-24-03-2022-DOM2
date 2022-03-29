

let seleccionEvento = document.querySelector("body > ul > li:nth-child(3)");
// console.log("1",seleccionEvento);

let seleccionAtributos = document.querySelector("#Mylista > li:nth-child(3)");
// console.log("2", seleccionAtributos);

let numero = 14;
let seleccionDataset = document.querySelectorAll("#Mylista > li");
seleccionDataset.forEach(element => {
    if(element.dataset.cc != undefined){
        if(element.dataset.cc.includes(numero) && numero != 0){
            console.log("3", element);
        }else if(numero==0){
            console.log("3", element);
        }
        // let resultado = (element.dataset.cc.includes(numero) && numero != 0) 
        //     ? ["3", element]
        //     :((numero==0) ? ["3", element] : "")
        // console.log(...resultado);
    }
});
// console.log(seleccionDataset);
