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

const arrayVuelos = [oferta1, oferta2, oferta3];
const arrayOfertas = [];

console.log(arrayVuelos);

// conexion al html
const mainContainer = document.getElementById("main-container");
const mainContainerOferta = document.getElementById("main-container-ultimaOferta");
const mainContainerMensajeOferta = document.getElementById("main-container-mensajeUltimaOferta");

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
                <input type="number" id="inptutOferta${vuelo.destino}"><button type="button" class="btn btn-success" id="boton${vuelo.id}">Ofertar</button>
            </div>
        </div>
       `
       mainContainer.appendChild(cardVuelos);
        
       const boton = document.getElementById(`boton${vuelo.id}`);
        boton.addEventListener("click", ()=>{
            const inputOferta = document.getElementById(`inptutOferta${vuelo.destino}`).value;
                compararOferta(inputOferta, vuelo.precio, vuelo.destino, vuelo.id );
                guardarOferta(vuelo.id,vuelo.precio);
        })
    })
};


// Funcion para mostrar formulario para ofertar.

const compararOferta = (inputOferta, precio, destino, id) => {
    const ofertaDestino = arrayVuelos.some(vuelo => vuelo.precio === precio);
 
    if(ofertaDestino){
        if(inputOferta >= precio){
                
                mainContainerOferta.innerHTML = "";
                
                const mensajeOferta = document.createElement("div");
                mensajeOferta.innerHTML = `
                <div class="modal-dialog">
                <h2>Tu oferta a ${destino} por $ ${inputOferta} se ingreso correctamente!</h2>
                </div>
                `
                mainContainerOferta.appendChild(mensajeOferta);

            }else{
                mainContainerOferta.innerHTML = "";
                
                const mensajeOferta = document.createElement("div");
                mensajeOferta.innerHTML = `
                <div class="modal-dialog">
                <h2>Tu oferta es menor a la ultima publicada, volve a intentarlo</h2>
                </div>
                `
                mainContainerOferta.appendChild(mensajeOferta);
            }
        }  
}

// Ver si existe oferta anterior y sino ofertar. Siempre y cuando la ultima haya sido menor

const guardarOferta = (id) =>{
    const revisarArrayOfertas= arrayOfertas.find(oferta => oferta.id === id);
    if(revisarArrayOfertas) {
        console.log("ya ofertaste para este destino");
    } else {
        const oferta = arrayVuelos.find(vuelo => vuelo.id === id);
        arrayOfertas.push(oferta);
        console.log("Se agrego tu oferta");
        console.log(arrayVuelos);
    }
}

// Mostrar por pantalla la ultima oferta, guardarla en el storage y recuperarla.

const mensajeOferta = () => {
    arrayOfertas.forEach(oferta =>{
        const mensajeOferta = document.createElement("div");
        mensajeOferta.innerHTML =`
            <p>Tu utima oferta fue a ${oferta.destino} por ${oferta.precio};
        `
    })
}

// Funcion para pintar el DOM con la nueva oferta siempre y cuando sea mayor a la ultima. 

// funcion para guardar ultimas ofertas en Storage, 

const guardarUltimaOferta = () => {
    const arrayJSON = JSON.stringify(arrayOfertas);
    localStorage.setItem("array", arrayJSON);
    const arrayRecuperado = localStorage.getItem("array");
    const arrayObjeto = JSON.parse(arrayRecuperado);
}

mostrarVuelos();
mensajeOferta();
