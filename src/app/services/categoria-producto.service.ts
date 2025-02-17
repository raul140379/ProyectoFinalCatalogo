import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core'; 
import { categoria } from '../modelo-datos/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaProductoService {

  private http= inject(HttpClient);
  private url:string='json/categorias.json'; 
  constructor() { 
    
  }

  
  getServicioCategoria() {
    return this.http.get<categoria[]>(this.url);
 // return this.getProductos();
  }
}
   

  
    