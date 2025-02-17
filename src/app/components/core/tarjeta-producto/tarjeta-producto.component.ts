import { CommonModule,LocationStrategy } from '@angular/common';
import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { producto } from '../../../modelo-datos/producto';
import { CarritoProductoService } from '../../../services/carrito-producto.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarjeta-producto',
  imports: [CommonModule,RouterLink],
  templateUrl: './tarjeta-producto.component.html',
  styleUrl: './tarjeta-producto.component.css'
})
export class TarjetaProductoComponent {

  @ Input() mensaje:string='';
  @ Input() productsTarjetaInpunt:any=[];
  @ Output() productoSeleccionado:EventEmitter<producto>=new EventEmitter<producto>;

  public listacarrito:producto[]=[];


  constructor(public carritoService:CarritoProductoService,private locationStrategy: LocationStrategy){
    carritoService=Inject(carritoService);
  }
  seleccionarProducto(){
    this.productoSeleccionado.emit(this.productsTarjetaInpunt)
  }
  agregarProducto(products:producto){
    this.carritoService.agregarProducto(products);
    /* this.locationStrategy.onPopState(() => {
      window.location.reload( );
    }); */
  }
  
}
