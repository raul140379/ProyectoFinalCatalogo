import { HttpClient } from '@angular/common/http';
import { inject, Injectable, OnInit } from '@angular/core'; 
import { producto } from '../modelo-datos/producto';
import { NgFor } from '@angular/common';
import { Observable, of } from 'rxjs';
import { categoria } from '../modelo-datos/categoria';

@Injectable({
  providedIn: 'root'
})
export class ListadoProductoService  {

    private httpClient= inject(HttpClient);
    private url:string='json/productos.json';
    private urlc:string='json/categorias.json'; 
    private products:producto[]=[];
  /*   private products:producto[]=[
      {"id":1,"nombre":"Havana","precio":1000,"img":"img/coca-cola.jpg","categoria":1},

      {"id":2,"nombre":"Jose Cuervo","precio":2000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNmkT4kkwtza5rJrHIJFzMfxmB5pk79A0htID_Uvf5jHLOoJ_Sedg4fUvjEtiovX96fpI&usqp=CAU","categoria":2},
  
      {"id":3,"nombre":"Pepsi","precio":3000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa44gksG9ew1ctGWB5Vuco1qvcQSE0DtJGOg&s","categoria":6},
  
      {"id":4,"nombre":"blue","precio":4000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5arjBHM04Dp_omwIGC-HTWfWhBq9buAdGKw&s","categoria":3},
  
      {"id":5,"nombre":"Seven","precio":4000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZeP-pjhTfSkA1eekSgrtA68MAKxY2tfosXg&s","categoria":6},
  
      {"id":6,"nombre":"Kolbert","precio":6000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYKQJtJZoCHQCoMiljrsetzOZxLmNPQuhS7P251j3B99yNzTgjD5lsww6XiNfw9vruYcg&usqp=CAU","categoria":4},
  
      {"id":7,"nombre":"Old Parts","precio":6000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYv5GsWQROy4enSUpLrtugai5xwrBWYt_3jw&s","categoria":5},
  
      {"id":8,"nombre":"fanta","precio":4000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjoAKk9_kZhQunh9m_5XER4qNCCvQ0Sm0_zA&s","categoria":6},
  
      {"id":9,"nombre":"sprite","precio":6000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4mfvHnbszum2hUtG60kORkuIxcZ91f4w6ppUk92ktklmgBgPz6WDbU_6dFTfico0Krm4&usqp=CAU","categoria":6},
  
      {"id":11,"nombre":"Terruno","precio":6000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDegPtSls0-BT855-2DLzYlOKmwGLW79lP6RCmn7P-ZFANPQ1t9C2BUm-A5TfDT3CNcU&usqp=CAU","categoria":4},
      
      {"id":12,"nombre":"Chival Rigal","precio":6000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDegPtSls0-BT855-2DLzYlOKmwGLW79lP6RCmn7P-ZFANPQ1t9C2BUm-A5TfDT3CNcU&usqp=CAU","categoria":5},
      
      {"id":13,"nombre":"Agua Ardiente","precio":6000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDegPtSls0-BT855-2DLzYlOKmwGLW79lP6RCmn7P-ZFANPQ1t9C2BUm-A5TfDT3CNcU&usqp=CAU","categoria":7},
      
      {"id":14,"nombre":"Pacena","precio":6000,"img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDDegPtSls0-BT855-2DLzYlOKmwGLW79lP6RCmn7P-ZFANPQ1t9C2BUm-A5TfDT3CNcU&usqp=CAU","categoria":8}
    ]; */
    constructor() { 
    
    }
    saveProducto(product:producto):Observable< producto> { 
      return of(this.products[0]);
    }
    
    getServicioListadoProducto():Observable< producto[]> { 
      //return this.httpClient.get<producto[]>(this.url);   
    //return of(this.products);
    return(this.httpClient.get<producto[]>(this.url))
    }
    updateProducto(product:producto):Observable< producto> { 
      return of(product);
    }
    deleteProducto(id:number):Observable< boolean> { 
      return of(true);
    }
    getProductoId(id:number):Observable<producto | undefined >{
      return of(this.products.find(product=>product.id===id));
    }

    //lectura de las categorias
    getServicioListadoCategoria():Observable<producto[]> { 
      return this.httpClient.get<producto[]>(this.urlc);
   // return this.getProductos();
    }
   
}
