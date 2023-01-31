const peso = document.querySelector("#peso")
const balanza = document.querySelector("#balanza")

peso.oninput = ( ) => {
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
  
  const metales = [
    {id:1, nombre: "Bronce", precio: 0},
    {id:2, nombre: "Cobre", precio:0 },
    {id:3, nombre: "Aluminio", precio:0},
    {id:4, nombre: "Perfil", precio: 0},
    {id:5, nombre: "Plomo", precio: 0},
    {id:6, nombre: "Acero Inox", precio:0}
  ]
  console.log(metales);
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
    const cuentaMetales = JSON.parse (localStorage.getItem ("carrito"))
    let salida = `<p> Boleta con los datos </p>
    <p> Cliente: <b> ${clienteMetales} </b> <br>
    Material: <b> ${materialMetales} </b><br>
    Estado: <b> ${estadoMetales} </b> <br>
    Peso: <b> ${pesoMetales} </b> </p>`
    document.getElementById ("resultado").innerHTML = salida
}
//Buttons
document.getElementById("btnGuardarDatos").addEventListener("click", guardarDatos)

