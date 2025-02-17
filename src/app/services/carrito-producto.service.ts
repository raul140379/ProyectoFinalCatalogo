import { Injectable } from '@angular/core';
import { carrito } from '../modelo-datos/carrito';
import { producto } from '../modelo-datos/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoProductoService {

  public listacarrito:carrito[]=[];

  constructor() {
    this.obtenerSession();
   }

  getCarrito(){    
    return this.listacarrito;
  }

  agregarProducto(products:producto){
    this.obtenerSession();
 
    const index=this.listacarrito.findIndex(item=>item.productos.id==products.id);

    if (index == -1){
      const item=new carrito(products,1);
      this.listacarrito.push(item);
     
    }else{
      this.actualizar(index,this.listacarrito[index].cantidad+1)
    }
      this.guardarSession();
   
     
  }
  
  actualizar(index:number,cantidad:number){
    if(index >=0 && index < this.listacarrito.length){

      this.listacarrito[index].cantidad=cantidad;
      this.guardarSession();
    }
  }
  
cantidadItem_carrito(){
   this.obtenerSession();
   return this.listacarrito.length;
 }
 
 totalCompra(){
   const total= this.listacarrito.reduce((sum,item)=>
   sum+item.productos.precio*item.cantidad,0 );
   return total;
 }
 cantidadProducto(){
  const total= this.listacarrito.values
    return total; 
 }
 eliminarItem(index:number){

  if(index >=0 && index < this.listacarrito.length){
    this.listacarrito.splice(index,1);
    this.guardarSession();
  }
 }
 guardarSession(){
   localStorage.setItem('carrito',JSON.stringify(this.listacarrito));
 }
 obtenerSession(){
   this.listacarrito=[];
   if(typeof window != 'undefined' && window.localStorage){
     const carrito=localStorage.getItem('carrito');
     if(carrito!=null){
       this.listacarrito=JSON.parse(carrito);
     }
   }
   
 }
}
