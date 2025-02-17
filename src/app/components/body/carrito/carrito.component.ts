import { Component, Inject, SimpleChanges } from '@angular/core';
import { CarritoProductoService } from '../../../services/carrito-producto.service';
import { carrito } from '../../../modelo-datos/carrito';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  imports: [CommonModule,FormsModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {

  public listacarrito:carrito[]=[];

    constructor(public carritoService:CarritoProductoService){
      carritoService=Inject(carritoService);
    }
  ngOnInit(): void {
    this.getListaCarrito();
     
  }
  getListaCarrito(){
    this.listacarrito=this.carritoService.getCarrito();
  }
 
  eliminarItem(index:number){
    this.carritoService.eliminarItem(index);
    this.getListaCarrito();
  }
  onkeyDown(event:any){
    event.preventDefault();
  }
  actualizarTotal(item:carrito,index:number){
    this.carritoService.actualizar(index,item.cantidad);
  }
}
