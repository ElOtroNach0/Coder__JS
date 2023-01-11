// Clase constuctura

class Persona{
    constructor(peso, altura, fecha, resultado){
        this.peso = peso;
        this.altura = altura;
        // this.fecha = fecha || New Date();
        this.historialIMC = resultado;
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
    const resultadoIMC = resultado;
    
    const instanciar = new Persona(varibleAltura, variblePeso, resultadoIMC);
    historial.push(instanciar);

    // Storage
    localStorage.setItem("Historial", JSON.stringify(historial));

    // Fn para mostrar el restultado.
    mostrarResultado(instanciar);

    // Fn para comprar los resultados
    comprarImc(instanciar);
})

// Fn para motrar resultado y guardarlo en la clase.

const mostrarResultado = (instanciar) =>{
    const div = document.createElement("div");
    resultadosDom.innerHTML = "";

    div.innerHTML += `
        <p>Tu IMC es: ${instanciar.calcularIndice()}</P>
    `
    resultadosDom.appendChild(div);

    instanciar.historialIMC = instanciar.calcularIndice();
    const resultado = instanciar.historialIMC;
    console.log(resultado);

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

const comprarImc = (historia) =>{
    if(historia.resultado < 18.5){
        Swal.fire({
            title: 'Por debajo',
            text: 'Tu IMC esta por debajo del parametro saludable',
            icon: 'info',
        })
    }else if(historia.resultado >= 18.5 && historia.resultado <= 24.9){
        Swal.fire({
            title: 'Saludable',
            text: 'Tu IMC es saludasble',
            icon: 'error',
        })
    }else{
        Swal.fire({
            title: 'Alto',
            text: 'Tu IMC supera el parametro saludable',
            icon: 'warning',
        })
    }
}

// Evento para limpiar el storage.

const btnLimpiar = document.querySelector ("#btn__limpiar");

btnLimpiar.addEventListener("click", ()=>{
    Swal.fire({
        title: 'Estas seguro?',
        text: "Estas por borrar el historial completo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, limpiar historial'
      }).then((result) => {
        if (result.isConfirmed) {
            historial = [];
            mostrarHistorial();
            localStorage.clear();
          Swal.fire(
            'Borrado!',
            'success'
          )
        }
      })
})


mostrarHistorial();

