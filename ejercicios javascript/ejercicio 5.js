Aplicamos_camelCase

function camelize(str) { 
    if (str.construtor !=="string"){
        throw TypeError ("el argumento debe ser una cadena de caracteres");
    }
    return str.replace(/\w+(.)/g, function(coincidencia,caracter){
        return caracter.toUppercase();
    });
}
try{
    console.log(camelize(" hola a todos que tal"))
} catch (e){
    console.log("error:$(e.mensaje");
}
