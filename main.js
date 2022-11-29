const saludar = () => {
    alert ('Bienvenido a Pasaporte!\n Primer sitio de subastas de vuelos');
}

const ofertas = () => {
    let oferta = Number(prompt('Para que vuelo queres ofertar? \n1-Bariloche\n2-Mendoza\n3-Salta'));

    while(oferta >= 4 || oferta == 0 || isNaN(oferta)){
        console.log(oferta);
        
        oferta = Number(prompt('No es posible ofertar!, Los vuelos para ofertar son: \n1-Bariloche\n2-Mendoza\n3-Salta'));
    }

    switch(oferta){
        case 1:
            return ultimoMontoA = 35000;  
        case 2:
            return ultimoMontoB = 11000;
        case 3:
            return ultimoMontoC = 10000;
    }

}

const destinos = (a) =>{
    let ultimoMontoA = 0;
    let ultimoMontoB = 0;
    let ultimoMontoC = 0;

    if (ultimoMontoA === 3500){
        return destino = "Bariloche";
    }else if(ultimoMontoB === 11000){
        return destino ="Mendoza";
    }else if(ultimoMontoC === 10000){
        return destino = "Salta";
    }
}

const subasta = (a, b) =>{
        do{
            respuestaOferta = Number(prompt('Estas por ofertar por un vuelo a ' + b + ', \n\n Cuanto queres ofertar? \n\nRecorda que tenes 3 posibilidades, se va a tomar la que supere el ultimo monto ofertado'));
        }while(isNaN(respuestaOferta) || respuestaOferta == '')
       
        if (a){
            for(i=2; i > 0; i--){
                if(respuestaOferta >= oferta){
                    alert ('Muy bien!! Tu oferta fue de $' + respuestaOferta + ' dentro de las proximas horas vas a saber si el ticket es tuyo');
                    break;
                        
                }else{
                    respuestaOferta = Number(prompt('Tu oferta de $' + respuestaOferta + ' esta por debajo! Te quedan ' + i + ' posibilidades'));
                }
            }
}
}


saludar();
let oferta = ofertas();
let destino = destinos(oferta);
let resultado = subasta(oferta, destino);