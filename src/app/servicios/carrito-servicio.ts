import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoServicio {

  arrayCarrito: Producto[] = []
  // CREATE
  agregarProducto(p: Producto) {
    const product = this.arrayCarrito.find(produ=>produ.id === p.id)
    if(product){
      p.cantidad++
    }else{
      this.arrayCarrito.push(p);
    }
  }

  obtenerProd() {
    return this.arrayCarrito;
  }
  aumentarCantidad(id: number) {
    const prod = this.arrayCarrito.find(p => p.id === id);
    if (prod) {
      prod.cantidad++;
    }
  }
  vaciarCarrito() {
    this.arrayCarrito = [];
  }
  disminuirCantidad(id: number) {
    const prod =
      this.arrayCarrito.find(p => p.id === id);
    if (prod && prod.cantidad > 1) {
      prod.cantidad--;
    }

  }
  eliminar(id: number) {
    this.arrayCarrito =
      this.arrayCarrito.filter(p => p.id !== id);
  }
}