//render carrito
const carritoLS = JSON.parse(localStorage.getItem("carrito")) || [];
const salida = document.getElementById("resultado");
const renderCarrito = () => {
    carritoLS.forEach((metales) => {
        const cuentaMetales = document.createElement("div");
        cuentaMetales.innerHTML = `<table class="table">

        <tbody>
        <tr>
            <th scope="row">${+1}</th>
            <td>${metales.materialMetales}</td>
            <td>${metales.estadoMetales}</td>
            <td>${metales.pesoMetales}</td>
            <td> ${totalCalculo}</td>

        </tr>
        </tbody>`


        salida.appendChild(cuentaMetales)

    });
}

//vaciar carrito
const vaciarCarrito = () =>{
    localStorage.removeItem("carrito");}
    document.getElementById("vaciar-carrito").addEventListener("click", vaciarCarrito)


renderCarrito();