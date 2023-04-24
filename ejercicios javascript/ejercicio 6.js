una_constante
const carrito ={
    productos:[
        {
            nombres:"papel higienico",
            unidades:4,
            precio:5 
        },{
            nombres:"chocolate",
            unidades:2,
            precio:1.5
        }
    ],

    get precioTotal(){
        let TotalCarrito =0;
    for (let x=0; x< this.productos.length; x++){
        TotalCarrito = TotalCarrito+ this.productos[x].unidades* this.productos[x].precio;
    
    } 
    return TotalCarrito
    }
}