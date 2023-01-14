//Guardado de datos 
const guardarDatos = () => {
    let cliente = document.getElementById("cliente").value
    let material = document.getElementById("material").value
    let estado = document.getElementById("estado").value
    let peso = document.getElementById("peso").value
    const cuentaMetales = { clienteMetales: cliente, materialMetales: material, estadoMetales: estado, pesoMetales: peso };
    localStorage.setItem("cuentaMetales", JSON.stringify(cuentaMetales));
}
//Recuperacion de datos
const recuperarDatos = () => {
    const cuentaMetales = JSON.parse(localStorage.getItem("cuentaMetales"));
    let salida = `<p> Boleta con los datos: </p>
    <p> Cliente: <b> ${cuentaMetales.clienteMetales} </b> <br>
    Metales: <b> ${cuentaMetales.materialMetales}</b> <br>
    Estado: <b> ${cuentaMetales.estadoMetales} </b> <br>
    Peso: <b> ${cuentaMetales.pesoMetales} </b> </p>`;
    document.getElementById("resultado").innerHTML = salida;
}
//Buttons
document.getElementById("btnGuardarDatos").addEventListener("click", guardarDatos)
document.getElementById("btnRecuperarDatos").addEventListener("click", recuperarDatos)
//Procedimiento y calculo 

let precio_bronce;
let precio_cobre;
let precio_aluminio;
let precio_plomo;
let precio_perfil;
let precio_aceroInox;

//Se determina el tipo de cliente

switch (cliente) {
    case "particular":
        precio_bronce = 750;
        precio_cobre = 1400;
        precio_aluminio = 200;
        precio_plomo = 250;
        precio_perfil = 300;
        precio_aceroInox = 100;
        break;
    case "empresa":
        precio_bronce = 800;
        precio_cobre = 1450;
        precio_aluminio = 250;
        precio_plomo = 300;
        precio_perfil = 350;
        precio_aceroInox = 150;
        break;
}
console.log(cliente);