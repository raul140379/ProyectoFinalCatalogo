import { producto } from "./producto";

 

export class carrito {
    productos:producto;
    cantidad:number;

    constructor(producto:producto,cantidad:number)
    {
        this.cantidad=cantidad;
        this.productos=producto
    }
}