
//Simulador de venta de metales no ferrosos (Bronce, Plomo, Aluminio y Cobre)

//Ingreso de datos
let cliente;
let metal;
let estado;
let peso;

do {
    cliente = prompt("Ingrese si es particular o si trabaja en una empresa").toLowerCase();
} while ((cliente != "particular") && (cliente != "empresa"));

do {
    metal = prompt("Ingrese que metal desea vender (Cobre, Bronce, Plomo o Aluminio").toLowerCase();
} while ((metal != "cobre") && (metal != "bronce") && (metal != "plomo") && (metal != "aluminio") && (metal != "acero inox") && (metal != "perfil"));

do {
    estado = prompt("Ingrese si el material esta limpio o sucio").toLowerCase();
} while ((estado != "limpio") && (estado != "sucio"));
do {
    peso = parseFloat(prompt("Ingrese el peso del material (0.100g hasta 300kg)"));
} while ((peso < 0.1) || (peso > 300));

console.log("Su" + " " + metal + " " + "pesó" + " " + peso + "kg");

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

function calculadora(peso, operacion, estado) {
    switch (operacion) {
        case "bronce":
            if (estado == "sucio") {
                return ((peso - (peso * 0.4)) * precio_bronce);
            } else {
                return precio_bronce * peso;
            }
            break;
        case "cobre":
            if (estado == "sucio") {
                return ((peso - (peso * 0.6)) * precio_cobre);
            } else {
                return precio_cobre * peso;
            }
            break
        case "aluminio":
            if (estado == "sucio") {
                return ((peso - (peso * 0.3)) * precio_aluminio);
            } else {
                return precio_aluminio * peso;
            }
            break
        case "plomo":
            if (estado == "sucio") {
                return ((peso - (peso * 0.8)) * precio_plomo);
            } else {
                return precio_plomo * peso;
            }
            break
        case "Acero Inox":
            if (estado == "sucio") {
                return ((peso - (peso * 0.7)) * precio_aceroInox);
            } else {
                return precio_aceroInox * peso;
            }
            break
        case "perfil":
            if (estado == "sucio") {
                return ((peso - (peso * 0.2)) * precio_perfil);
            } else {
                return precio_perfil * peso;
            }
            break
        default:
            return 0;
            break;
    }
}



//Salida de datos 

console.log(calculadora(peso, metal, estado));
alert("Su" + " " + metal + " " + "pesó" + " " + peso + "kg");
alert("El total de su" + " " + metal + " " + estado + " " + "es" + " " + "$" + calculadora(peso, metal, estado));
alert("Muchas gracias por utilizar el simulador!")

