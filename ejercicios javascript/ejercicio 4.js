utilizacion_de_str.split

function  palabraMasLarga(str)
let palabra = str.split(" ");
let lapabramaslarga = "";

for (let x = 0 ; x < palabra.length; x++){
    if (palabra[x].length > lapabramaslarga.length )
    {lapabramaslarga = palabra[x];    
    }
    {
        return palabraMasLarga;

        console.log( palabraMasLarga("Erase una vez que se era"));

    }

}


function primeraMayuscula(str) { 
    const palabra = str.split (" ");
    for (let x = 0; x < palabra.length; x++){
        palabra[x] = palabra[x][0].toUpeerCase()+ palabra[x].substrig(1);
    }
    return palabra.join (" ");

}

console.log(primeraMayuscula("En un lugar de la mancha"));