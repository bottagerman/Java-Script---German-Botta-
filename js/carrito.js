
const guardarMetalesCuenta = (metales) => {
    localStorage.setItem("carrito", JSON.stringify(metales))
}
const cargarMetalesCuenta = () => {
    return JSON.parse(localStorage.getItem("carrito")) || []
}

const agregarCarrito = (id) => {
    const metales_carrito= cargarMetalesCuenta();
    const metales = metales.find(item=>item.id === id);
    materialCarrito.push(metales);
    guardarMetalesCuenta(metales_carrito);
}
const totalCarrito = ( ) => {
    const metales = cargarMetalesCuenta();
    return metales.lenght; 
}
