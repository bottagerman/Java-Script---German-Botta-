let cliente;
let nombre_material;
let estado;
let peso;

do {
  cliente = prompt(
    "Ingrese si es particular o si trabaja en una empresa"
  ).toLowerCase();
} while (cliente != "particular" && cliente != "empresa");
//Pregunta que material quiere vender
do {
  nombre_material = prompt(
    "Ingrese que metal desea vender (Cobre, Bronce, Plomo, Aluminio, Perfil o Acero Inox"
  ).toLowerCase();
} while (
  nombre_material != "cobre" &&
  nombre_material != "bronce" &&
  nombre_material != "plomo" &&
  nombre_material != "aluminio" &&
  nombre_material != "acero inox" &&
  nombre_material != "perfil"
);
//Pregunta si el material esta limpio o sucio
do {
  estado = prompt("Ingrese si el material esta limpio o sucio").toLowerCase();
} while (estado != "limpio" && estado != "sucio");
//Pregunta que peso tiene el material
do {
  peso = parseFloat(
    prompt("Ingrese el peso del material (0.100g hasta 300kg)")
  );
} while (peso < 0.1 || peso > 300);

//Pregunto si desea vender algo mas
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

// Array de los metales

class Material {
  constructor(id, nombre, precio) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
  }
}
const metales = [
  new Material(1, "Bronce", precio_bronce),
  new Material(2, "Cobre", precio_cobre),
  new Material(3, "Aluminio", precio_aluminio),
  new Material(4, "Plomo", precio_plomo),
  new Material(5, "Perfil", precio_perfil),
  new Material(6, "Acero Inox", precio_aceroInox),
];
//Pregunta el tipo de cliente

let cuentaMetales = true;

cuentaMetales = confirm("¿Algo mas?");

while (cuentaMetales) {
  let suma_metales = "";
  for (let material of metales) {
    suma_metales += material.id + "-" + material.nombre + " - " + peso + "/n";
  }
  break;
}
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

console.log(calculadora(peso, nombre_material, estado));

alert("Su" + " " + nombre_material + " " + "pesó" + " " + peso + "kg");

alert(
  "El total de su" +
    " " +
    nombre_material +
    " " +
    estado +
    " " +
    "es" +
    " " +
    "$" +
    calculadora(peso, nombre_material, estado)
);

console.log(
  precio_bronce,
  precio_cobre,
  precio_aluminio,
  precio_plomo,
  precio_perfil,
  precio_aceroInox
);

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
