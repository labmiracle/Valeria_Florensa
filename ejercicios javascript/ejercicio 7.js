utilizamos_switch_en_conteo_de_cartas

let contar =0;
function cc(cartas) {
    let decision;


    switch (typeof cartas) {
        case "cadena":
            if ( cartas === "j" || cartas === "q" || cartas === "k" || cartas ==="a") {
                contar--;
                
            } else {
                throw new console.error(" carta invalida" + cartas );

            }
            break;
    
            case "number":
                if(card < 2 || card > 10){
                    throw new Error("Carta invalida: " + card);
                } else if(card <= 6){
                    count++;
                } else if(card === 10){
                    count--;
                }

            break;
    }
    if (contar >0 ) {
        decision = "bet";
    }else{
        decision= "hold";
    }
    return  console.log ( " %d %s" , contar,decision);
}


cc(7);
cc("j");
cc(10);
cc("a");
cc(6);



