import { Component, Input } from '@angular/core';
import { TarjetaProductoComponent } from '../tarjeta-producto/tarjeta-producto.component';
import { producto } from '../../../modelo-datos/producto';
import { Observable } from 'rxjs';
import { ListadoProductoService } from '../../../services/listado-producto.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listado-producto',
  imports: [TarjetaProductoComponent,RouterModule],
  templateUrl: './listado-producto.component.html',
  styleUrl: './listado-producto.component.css'
})
export class ListadoProductoComponent {

  //public dataTarjeta$?=Observable<producto>;
  public productos:producto[]=[];
  public productoFiltrado:producto[]=[];
  public productoList:producto[]=[];  
  @ Input() productsListadoInpunt:any=[];
  @ Input() categoriaListadoInpunt:any=[];
  @Input() Itemcategoria:any=[];
  public productoNombre:producto[]=[];
  
  constructor(private listadoProductoService:ListadoProductoService, private router:Router){

   this.listadoProductoService.getServicioListadoProducto()
   .subscribe(producto=>this.productoList=producto);
    this.CargarProductoCategoria();
  } 
    
  irDetalle(product:producto){
    console.log('mi detalle ya esta es:', product); 
    this.router.navigate(['/product',product.id]);
  }

  CargarProductoCategoria(){
    
     this.Itemcategoria=this.categoriaListadoInpunt.id;
    // alert('mi id :' + item.id);
    this.productoFiltrado=[];
    this.productoFiltrado=this.filtarProductoCategoria(this.productoList,this.categoriaListadoInpunt.id);
    console.log('mis producto filtlrado es: id:'+this.categoriaListadoInpunt.id+' producto:'+ this.productoFiltrado);
   }
   filtarProductoCategoria(products:producto[],id:number){
   
    const listaFiltro=products.filter(producto=>{
      if (producto.categoria==id)
        this.productoFiltrado.push(producto);

    }); 
    return this.productoFiltrado;
  }
}
