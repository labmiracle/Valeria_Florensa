funcion_recursiva
function suma (num){
    if (num.length ===1) {
        return num [0] ;
    } else { 
        return num.pop (0) + suma(num);
    }
}

console.log(suma([1,2,3,4,5]));//15
console.log(suma([2,3,5,7,11,13,17])); //58