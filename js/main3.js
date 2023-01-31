const peso = document.querySelector("#peso")
const balanza = document.querySelector("#balanza")

peso.oninput = () => {
    balanza.innerHTML = peso.value
}

//Array materiales 
class material {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let precio_bronce;
let precio_cobre;
let precio_aluminio;
let precio_plomo;
let precio_perfil;
let precio_aceroInox;

const metales = [
    { id: 1, nombre: "Bronce", precio: precio_bronce },
    { id: 2, nombre: "Cobre", precio: precio_cobre },
    { id: 3, nombre: "Aluminio", precio: precio_aluminio },
    { id: 4, nombre: "Perfil", precio: precio_perfil },
    { id: 5, nombre: "Plomo", precio: precio_plomo },
    { id: 6, nombre: "Acero Inox", precio: precio_aceroInox }
]

//Guardado de datos 

const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const guardarDatos = () => {
    let cliente = document.getElementById("cliente").value
    let material = document.getElementById("metales").value
    let estado = document.getElementById("estado").value
    let peso = document.getElementById("peso").value
    const cuentaMetales = { clienteMetales: cliente, materialMetales: material, estadoMetales: estado, pesoMetales: peso };
    carrito.push(cuentaMetales);
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const recuperarDatos = () => {
    let salida = `<p> Boleta con los datos </p>
    <p> Cliente: <b> ${clienteMetales} </b> <br>
    Material: <b> ${materialMetales} </b><br>
    Estado: <b> ${estadoMetales} </b> <br>
    Peso: <b> ${pesoMetales} </b> </p>`
    document.getElementById("resultado").innerHTML = salida
}
//Buttons
document.getElementById("btnGuardarDatos").addEventListener("click", guardarDatos)

