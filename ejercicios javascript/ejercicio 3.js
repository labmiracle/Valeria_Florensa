   utilazacion_de_while

   function calcularDiasCrecimiento(velocidadCrecimiento, velocidadDecrecimiento, alturaDeseada) {
    let dias =0; let alturadelaplanta=0;
    
    while ( alturaDeseada > alturadelaplanta ) {
        alturadelaplanta += velocidadCrecimiento;
        alturadelaplanta -= velocidadCrecimiento;
        dias++;
    }
    return totaldias
}

console.log(calcularDiasCrecimiento (3,6,9,12))
