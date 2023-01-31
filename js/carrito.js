
  const metales = [
    {id:1, nombre: "Bronce", precio: 0},
    {id:2, nombre: "Cobre", precio:0 },
    {id:3, nombre: "Aluminio", precio:0},
    {id:4, nombre: "Perfil", precio: 0},
    {id:5, nombre: "Plomo", precio: 0},
    {id:6, nombre: "Acero Inox", precio:0}
  ]


//Procedimiento y Calculo

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

const renderCarrito = () => {
    const salida = document.getElementById("resultado")
    carrito.forEach (metales => { 
        const cuentaMetales = document.createElement (div)
        cuentaMetales.innerHtml= `<table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Material</th>
            <th scope="col">Estado</th>
            <th scope="col">Peso</th>
            <th scope="col">Precio</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <th scope="row">1</th>
            <td>${cuentaMetales.materialMetales}</td>
            <td>${cuentaMetales.estadoMetales}</td>
            <td>@${cuentaMetales.pesoMetales}</td>
        </tr>
        </tbody>
        </table>`

        salida.appendChild(cuentaMetales)
    })
}
/*     metales_carrito.innerHtml= `  const metales = [
        {id:${material.id}, nombre: "Bronce", precio: ${precio_bronce}},
        {id:2, nombre: "Cobre", precio:${precio_cobre} },
        {id:3, nombre: "Aluminio", precio:${precio_aluminio}},
        {id:4, nombre: "Perfil", precio: ${precio_perfil}},
        {id:5, nombre: "Plomo", precio:  ${precio_plomo}},
        {id:6, nombre: "Acero Inox", precio: ${precio_aceroInox}}
      ]`

      container.appendChild(metales_carrito)
} 
 */
const guardarMetalesCuenta = (metales) => {
    localStorage.setItem("carrito", JSON.stringify(metales))
}
const cargarMetalesCuenta = () => {
    return JSON.parse(localStorage.getItem("carrito")) || []
}

const agregarCarrito = (id) => {
    const metales_carrito = cargarMetalesCuenta();
    const metales = metales.find(item => item.id === id);
    materialCarrito.push(metales);
    guardarMetalesCuenta(metales_carrito);
}
const totalCarrito = () => {
    const metales = cargarMetalesCuenta();
    return metales.lenght;
}

renderCarrito();