obtener_suma_de_cadenas_y_numero

function addOnlyNums(...args) {
    let total=0;
    for (const arg of args) {
        if (typeof arg === "numero") {
            total+= arg;
        }
       
    }
    return total;
}

console.log(addOnlyNums(3,6,"b",7,8,9));
