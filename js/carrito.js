const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];
const salida = document.getElementById("resultado");

const renderCarrito = () => {
    carritoLS.forEach((metales) => {
        const cuentaMetales = document.createElement("div");
        cuentaMetales.innerHTML = `<table class="table">
        <tbody>
        <tr>
            <th scope="row">${+1}</th>
            <td>${cuentaMetales.materialMetales}</td>
            <td>${cuentaMetales.estadoMetales}</td>
            <td>${cuentaMetales.pesoMetales}</td>
        </tr>
        </tbody>`


        salida.appendChild(cuentaMetales)

    });
}

const vaciarCarrito = () =>{
    localStorage.removeItem("carrito");}
    document.getElementById("vaciar-carrito").addEventListener("click", vaciarCarrito)


renderCarrito();