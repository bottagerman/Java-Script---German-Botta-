
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
console.log(cliente)
// Array de los metales

class material {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}

const metales = [
  {id:1, nombre: "Bronce", precio: precio_bronce},
  {id:2, nombre: "Cobre", precio: precio_cobre},
  {id:3, nombre: "Aluminio", precio: precio_aluminio},
  {id:4, nombre: "Perfil", precio: precio_perfil},
  {id:5, nombre: "Plomo", precio: precio_plomo},
  {id:6, nombre: "Acero Inox", precio: precio_aceroInox}
]
// Storage, cuenta material 

;

/* let cuentaMetales = true; */


/* 
while (cuentaMetales) {
  let suma_metales = "";
  for (let material of metales) {
    suma_metales += material.id + "-" + material.nombre + " - " + peso + "/n";
  }
  break;
} */
function calculadora(peso, operacion, estado) {
  switch (operacion) {
    case "bronce":
      if (estado == "sucio") {
        return (peso - peso * 0.4) * precio_bronce;
      } else {
        return precio_bronce * peso;
      }
      break;
    case "cobre":
      if (estado == "sucio") {
        return (peso - peso * 0.6) * precio_cobre;
      } else {
        return precio_cobre * peso;
      }
      break;
    case "aluminio":
      if (estado == "sucio") {
        return (peso - peso * 0.3) * precio_aluminio;
      } else {
        return precio_aluminio * peso;
      }
      break;
    case "plomo":
      if (estado == "sucio") {
        return (peso - peso * 0.8) * precio_plomo;
      } else {
        return precio_plomo * peso;
      }
      break;
    case "Acero Inox":
      if (estado == "sucio") {
        return (peso - peso * 0.7) * precio_aceroInox;
      } else {
        return precio_aceroInox * peso;
      }
      break;
    case "perfil":
      if (estado == "sucio") {
        return (peso - peso * 0.2) * precio_perfil;
      } else {
        return precio_perfil * peso;
      }
      break;
    default:
      return 0;
      break;
  }
}

 console.log(calculadora(peso, material, estado)); 



//esto tenes que hacerlo con un array de objetos y con una condicion que te permita salir le agregue un breack 


// while (cuentaMetales) {
//   let suma_metales = "";
//   console.log(cuentaMetales);
//   //Buscar el material
//   let metales = buscarMetales(nombre_material);
//   if (metales != null) {
//     metal_carrito.push(metales_carrito);
//   }
//   console.log(metal_carrito);
//   break;
// }

// function buscarMetales(nombre) {
//   return metales.find((item) => item.nombre === nombre_material);
// }
// function filtrarMetales() {
//   return metales.filter((item) => item.nombre === nombre_material);
// }

