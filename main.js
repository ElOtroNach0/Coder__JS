// Objeto construstor.

class Vuelo {
    constructor(destino, precio){
        this.destino = destino;
        this.precio = precio;
    }
}

const oferta1 = new Vuelo("Bariloche", 15000);
const oferta2 = new Vuelo("Salta", 11000);
const oferta3 = new Vuelo("Mendoza", 25000);

const arrayVuelos = [];

arrayVuelos.push(oferta1);
arrayVuelos.push(oferta2);
arrayVuelos.push(oferta3);

console.log(arrayVuelos);

// FUNCIONES 

// Fn Bienvenida
const saludar = () => {
    alert ('Bienvenido a Pasaporte!\n Primer sitio de subastas de vuelos');
}

// Fn Seleccion de destinos que se pueden ofertar.
const destinos = () => {
    let oferta = Number(prompt('Para que vuelo queres ofertar? \n1-Bariloche\n2-Mendoza\n3-Salta\n4-Salir'));

    while(oferta >= 5 || oferta == 0 || isNaN(oferta)){
        oferta = Number(prompt('No es posible ofertar!, Los vuelos para ofertar son: \n1-Bariloche\n2-Mendoza\n3-Salta\n4-Salir'));
    }

    return oferta;

}
// Fn Ingrese de monto a ofertar para el destino seleccionado.
const ofertar = (a) =>{
    const destino = a;
   
    const precio = Number(prompt("Ingresar el monto a ofertar, tene en cuenta que tiene que ser mayor al monto anterior"));

    const oferta = new Vuelo(destino, precio);
    arrayVuelos.push(oferta);

    return precio;
}

// Fn comprueba si el valor ingresado es menor al ultimo ofertado.

const compararSubasta = (precio) => {
    if (arrayVuelos.find(precios => precios.precio < precio)){
        alert ("Tu oferta fue ingresada correctamente");
        salir()
    }else {
        alert("Tu monto es menor a la ultima ofertada, por favor oferta un poco mas");
        let aceptarCancelar = confirm("Queres volver a probar suerte?");

        if (aceptarCancelar){
            destinos();
        }else{
            salir();
        };

    }
};

//  Fn Salir del programa

const salir = () => {
    alert ("Nos vemos la proxima!");
}


// fn swich
const seleccionCaso = (oferta) => {
    switch(oferta) {
        case 1:
            return "Bariloche";
        case 2:
            return "Mendoza";
        case 3:
            return "Salta";
        case 4:
            return salir();
        break;
    }
}

saludar();
let fnDestinos = destinos();
let fnCasos = seleccionCaso(fnDestinos);
let fnOfertar = ofertar(fnDestinos);
let fnPrecio = compararSubasta(fnOfertar);
