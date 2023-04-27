log_mas_while_mas_swith

const adivinaunnumero = math.floor (math.ramdom()*10 )+1;
let adelantepruebaestoyseguradequeperderas = parseInt(prompt("adivina un numero entre el 1 y 10"));
while (adelantepruebaestoyseguradequeperderas !== adivinaunnumero ) {
    if (adelantepruebaestoyseguradequeperderas < adivinaunnumero) {
        console.log( " el numero es mayor ");
    }
    else{
        console.log ("el numero es menor");
    }
    adelantepruebaestoyseguradequeperderas = parseInt(prompt("intentalo de nuevo"));
    
}

console.log("Felicitaciones! Ganaste  ")


const niveles = parseInt(prompt("Elige el nivel de dificultad:1- Facil, 2- Dificil"));

let nivel;
switch (niveles) {
    case 1:
        nivel=10;
        break;
        case 2:
            nivel=100;
            break;
            default:10;

}
const adivinanumerosecreto = math.floor(math.ramdom() * nivel) + 1;
let adelantepruebaestoysegurodequeperderas = parseInt (prompt("tenes que adivinar el numero secreto ¿podras?(entre 1 y $ {rango}:" ));
while (adivinanumerosecreto !== adelantepruebaestoysegurodequeperderas) {
    if (adivinanumerosecreto < adelantepruebaestoysegurodequeperderas) {
        console.log("el numero es mayor "); 
    }    
    else { 
        console.log("el numero es menor");
    }
    adivinanumerosecreto = parseInt(prompt("tienes otra oportunidad."));

}
console.log("Felicitaciones , logras !");
