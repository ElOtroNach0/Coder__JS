// Clase constuctura

class Persona{
    constructor(peso, altura, fecha, resultado){
        this.peso = peso;
        this.altura = altura;
        // this.fecha = fecha || New Date();
        this.historailIMC = resultado;
    }

    calcularIndice() {
        const resultado = (this.peso / (this.altura * this.altura)) * 10000;
        return resultado.toFixed(2);
    }
}

// Array vacio.
let historial = [];

//Si hay algo en el Storage se carga en el array Historial.
if(localStorage.getItem("Historial")){
    historial = JSON.parse(localStorage.getItem("Historial"));
}

// Variables.
const btnCalcular = document.querySelector("#calcularIMC");
const resultadosDom = document.querySelector("#mostrarResultado");
const historialDom = document.querySelector("#container__mostrarDatos");

// EventoClick para ejecutar funcion CalcularIndice.

btnCalcular.addEventListener("click", ()=>{
    const varibleAltura = document.querySelector("#input_cm").value;
    const variblePeso = document.querySelector("#input_kg").value;
    
    const instanciar = new Persona(varibleAltura, variblePeso);
    historial.push(instanciar);

    // Storage
    localStorage.setItem("Historial", JSON.stringify(historial));

    // Fn para mostrar el restultado.
    mostrarResultado(instanciar);
})

// Fn para motrar resultado y guardarlo en la clase.

const mostrarResultado = (instanciar) =>{
    const div = document.createElement("div");
    resultadosDom.innerHTML = "";

    div.innerHTML += `
        <p>Tu IMC es: ${instanciar.calcularIndice()}</P>
    `
    resultadosDom.appendChild(div);
}

// Fn para mostrar datos historicos.

const mostrarHistorial = () =>{
    historial.forEach(historia =>{
      
        const divHistorial = document.createElement("div");
        divHistorial.innerHTML = `
            <p>${historia.peso} - ${historia.altura} - ${historia.resultado}
        `
        historialDom.appendChild(divHistorial);
    })
}

// Fn para comprar IMC obtenido con tabla.

const comprarImc = () =>{
    
}


mostrarHistorial();

