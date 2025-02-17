import { Component, EventEmitter, Input, Output } from '@angular/core';
import { producto } from '../../../modelo-datos/producto';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ListadoProductoService } from '../../../services/listado-producto.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-detalle',
  imports: [RouterModule ,CommonModule],
  templateUrl: './lista-detalle.component.html',
  styleUrl: './lista-detalle.component.css'
})
export class ListaDetalleComponent {
  public producto:producto | undefined={id:0,nombre:'',precio:0,img:'',categoria:0}
  @ Input() detalleProductsInpunt:any=[];
  @ Output() productoSeleccionado:EventEmitter<producto>=new EventEmitter<producto>;
  
  constructor(private router:Router,private activerouter:ActivatedRoute, listadoproductoService:ListadoProductoService){
    const id=Number(this.activerouter.snapshot.paramMap.get('id'));
    listadoproductoService.getProductoId((id))
    .subscribe(product=>this.producto=product);
  }
  seleccionarProducto(){
    this.productoSeleccionado.emit(this.detalleProductsInpunt);
  }
  irListadoProducto(){
   // this.router.navigate(['']);
   window.history.back();
  }
}
