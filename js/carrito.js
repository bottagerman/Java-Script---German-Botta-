const guardarMetalesCuenta = (metales) => {
    localStorage.setItem("carrito", JSON.stringify(metales))
}
console.log(precio_aceroInox)
const cargarMetalesCuenta = () => {
    return JSON.parse(localStorage.getItem("carrito")) || []
}

const agregarCarrito = (id) => {
    const materialCarrito = cargarMetalesCuenta();
    const metales= cargarMetalesCuenta();
    const material = metales.find(item=>item.id === id);
    materialCarrito.push(metales);
    guardarMetalesCuenta(materialCarrito);
}