// Objeto construstor.

class Vuelo {
    constructor(id, destino, precio, img){
        this.id = id;
        this.destino = destino;
        this.precio = precio;
        this.img = img;
    }
}

const oferta1 = new Vuelo(1, "Bariloche", 15000, "./img/bariloche.jpg");
const oferta2 = new Vuelo(2, "Salta", 11000, "./img/salta.jpg");
const oferta3 = new Vuelo(3, "Mendoza", 25000, "./img/mendoza.jpg");

const arrayVuelos = [];

arrayVuelos.push(oferta1);
arrayVuelos.push(oferta2);
arrayVuelos.push(oferta3);

console.log(arrayVuelos);

let arrayOfertas = [];

// conexion al html
const mainContainer = document.getElementById("main-container");
const mainContainerFormulario = document.getElementById("main-container-formulario");

// FUNCIONES 
// Funcion para mostrar los vuelos a los cuales se puede ofertar.

const mostrarVuelos = () => {
    arrayVuelos.forEach(vuelo => {
       const cardVuelos = document.createElement("div");
       cardVuelos.classList.add("col-xl-3", "col-md-6", "col-xs-12"); 
       cardVuelos.innerHTML = `
        <div class="card">
            <img src="${vuelo.img}" class="card-img-top" alt="${vuelo.destino}">
            <div class="card-body">
                <h3>${vuelo.destino}</h3>
                <p>Ultimo precio:$ ${vuelo.precio}</p>
                <button type="button" class="btn btn-success" id="boton${vuelo.id}">Ofertar</button>
            </div>
        </div>
       `
       mainContainer.appendChild(cardVuelos);

        const boton = document.getElementById(`boton${vuelo.id}`);
        const botonActivado = document.getElementById("botonActivado");

        boton.addEventListener("click", ()=>{
            botonActivado.classList.toggle("active");

        })


        })
    };

mostrarVuelos();

const ultimaOferta = (value) => {
    const ofertaPrecio = arrayVuelos.find(vuelo => vuelo.precio === value);
    if(ofertaPrecio && ofertaPrecio > precio){
        ofertaPrecio.precio
        console.log("Tu precio se ingreso correctamente");
    }else{
        console.log("El precio ofertado es menor! Volve a intentarlo")
    }
}