const guardarDatos = () => {
    let cliente = document.getElementById("cliente").value
    let material = document.getElementById("material").value 
    let estado = document.getElementById("estado").value
    let peso = document.getElementById("peso").value
    const cuentaMetales = {clienteMetales:cliente, materialMetales:material, estadoMetales:estado, pesoMetales:peso};
    localStorage.setItem("cuentaMetales", JSON.stringify(cuentaMetales));
}
const recuperarDatos = () =>{
    const cuentaMetales = JSON.parse(localStorage.getItem("cuentaMetales"));
    let salida = `<p> Boleta con los datos: </p>
    <p> Cliente: <b> ${cuentaMetales.clienteMetales} </b> <br>
    Metales: <b> ${cuentaMetales.materialMetales}</b> <br>
    Estado: <b> ${cuentaMetales.estadoMetales} </b> <br>
    Peso: <b> ${cuentaMetales.pesoMetales} </b> </p>`;
    document.getElementById("resultado").innerHTML = salida;
}

document.getElementById("btnGuardarDatos").addEventListener("click", guardarDatos)
document.getElementById("btnRecuperarDatos").addEventListener("click", recuperarDatos)

