import { Component, Inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { categoria } from '../../../modelo-datos/categoria';
//import { CategoriaProductoService } from '../../../services/categoria-producto.service';
import { ListadoProductoComponent } from '../../core/listado-producto/listado-producto.component';
import { producto } from '../../../modelo-datos/producto';
import { ListadoProductoService } from '../../../services/listado-producto.service';
import { CommonModule,LocationStrategy } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarritoComponent } from '../carrito/carrito.component';
import { CategoriaProductoService } from '../../../services/categoria-producto.service';
import { CarritoProductoService } from '../../../services/carrito-producto.service';

@Component({
  selector: 'app-body',
  imports: [ListadoProductoComponent,CommonModule,RouterLink,CarritoComponent],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent  implements OnInit{

  public categoria:categoria[]=[];  
  public productoList:producto[]=[];  
  public productoFiltrado:producto[]=[];
  public productoNombre:producto[]=[];
  @Input() Itemcategoria:any=[];
  @Input() nombreProducto:string='';
  //public carritoServi=Inject(CarritoProductoService);

  constructor(public categoriaServicio:CategoriaProductoService,public carritoServices:CarritoProductoService,public ListaProductoServicio:ListadoProductoService,private locationStrategy: LocationStrategy){

   // categoriaServicio=Inject(categoriaServicio);
    //listadoProductoServicio=Inject(listadoProductoServicio);
    //carritoServices=Inject(carritoServices);
  } 
   
  ngOnInit(): void {
    this.getCategoriaProductos(); 
    this.getListadoProductos();
   // this.productoFiltrado=[];
  }
 
  getCategoriaProductos(){
    //observable con el subscribe...
    this.categoriaServicio.getServicioCategoria().subscribe({
      next:(data)=>{
        this.categoria=data;
      //  console.log(this.categoria);
      },
      error:(e)=>{
        console.error(e);
      }
    }) 
  } 
  getListadoProductos(){
    //observable con el subscribe...
    this.ListaProductoServicio.getServicioListadoProducto().subscribe({
      next:(data)=>{
        this.productoList=data;
      //  console.log(this.categoria);
      },
      error:(e)=>{
        console.error(e);
      }
    }) 
  } 
  CargarProductoCategoria(item:categoria){
    this.Itemcategoria=item;
   // alert('mi id :' + item.id);
   this.productoFiltrado=[];
  this.productoFiltrado=this.filtarProductoCategoria(this.productoList,item.id);
console.log('mis producto filtlrado es: id:'+item.id+' producto:'+ this.productoFiltrado);
  }
  refrescar(){
    this.locationStrategy.onPopState(() => {
      window.location.reload( );
    });
  }
 
  buscarProductoNombre(nombre:string){
    const lista=this.productoFiltrado.filter(product=>{
      if (product.nombre==nombre)
        this.productoNombre.push(product)
    });
    return this.productoNombre;
  }
  filtarProductoCategoria(products:producto[],id:number){
   
    const listaFiltro=products.filter(producto=>{
      if (producto.categoria==id)
        this.productoFiltrado.push(producto);

    });
    //console.log('producto filtrado es :'+this.productoFiltrado);
    //console.log(listaFiltro);
   // listaFiltro=listaFiltro
    return this.productoFiltrado;
  }
}
