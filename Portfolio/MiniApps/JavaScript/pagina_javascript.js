// Alertas
// alert("Hola soy David Cortés");

// Variables
let nombre = "David";

// Constantes
const altura = 180;
const apellido = "Cortés"

// Mostrar por consola
console.log(nombre);
console.log(apellido);
console.log(altura);



// Concatenación
let concatenacion = nombre + " " + apellido;
console.log(concatenacion);


// Seleccionar elementos de la pagina (DOM)
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <hr/>
    <h2>Soy la caja de datos</h2> <br/>
    <h3>Mi nombre es: ${concatenacion}</h3>
    <h3>Mido: ${altura}</h3>
`;


// Condiciones
if(altura >= 185){
    datos.innerHTML += `
    <br/>
    <h1>Condiciones</h1>
    <h3>Eres una persona alta</h3>
    `
}else{
    datos.innerHTML += `
    <br/>
    <h1>Condiciones</h1>
    <h3>Eres una persona bajita</h3>
    `
}


// Bucles
datos.innerHTML += `
    <br/>
    <h1>Bucles</h1>
    `

for(let year = 2021; year <= 2023; year++){
    datos.innerHTML += `
    <h3>Estamos en el año: ${year}</h3>
    `
}


// Arrays
let nombres = ["David","Ruben","Vicente"];

let divNombres = document.querySelector("#nombres");

datos.innerHTML += `
    <br/>
    <h1>Arrays</h1>
`

divNombres.innerHTML += `
    <h3>${nombres}</h3>
    <h3>${nombres[0]}</h3>
    <h3>${nombres[1]}</h3>
`


// Recorrer arrays

divNombres.innerHTML += "<br/><h1>Lista nombres</h1><ol>"

nombres.forEach(nombre => {
    divNombres.innerHTML += "<h3><li>" + nombre + "</li></h3>"
});

divNombres.innerHTML += "</ol>"


// Funciones
divNombres.innerHTML += `
    <br/>
    <h1>Funciones</h1>
`

const miInformacion = (nombre, altura) => {
    let misDatos = `
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mido: ${altura}</h3>
    `
    return misDatos;
}



const imprimir = () => {
    let informacion = document.querySelector("#informacion");
    informacion.innerHTML += `
    ${miInformacion("Asun",170)};
    `
}

imprimir();
