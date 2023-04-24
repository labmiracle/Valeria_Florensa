funcion_sumar_devolver

function suma(...args) {
    let total= 0;
    for ( const arg of args ) {
        total += arg ;
    }
    return total;
    
}


console.log(suma(3,6,9,12,15));
