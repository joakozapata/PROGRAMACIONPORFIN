import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';


@Injectable({
  providedIn: 'root',
})
export class FavoritoServicio {
  arrayFavoritos: Producto[] = []

  

  agregarFavorito(f: Producto) {
 const product = this.arrayFavoritos.find(produ=>produ.id === f.id)
    if(product){
      f.cantidad++
    }else{
      this.arrayFavoritos.push(f);
    }  }
  obtenerFavoritos() {
    return this.arrayFavoritos;
  }
  eliminarFavorito(id: number) {
    this.arrayFavoritos = this.arrayFavoritos.filter(f => f.id !== id)
  }
}
