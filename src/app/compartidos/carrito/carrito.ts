import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Producto } from '../../models/producto';
import { CarritoServicio } from '../../servicios/carrito-servicio';

@Component({
  selector: 'app-carrito',
  imports: [RouterLink],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css',
})
export class Carrito implements OnInit {

  productosCarrito: Producto[] = []
  constructor(
    private carritoServicio: CarritoServicio
  ) { }
  ngOnInit() {

    this.productosCarrito =
      this.carritoServicio.obtenerProd()
  }
  aumentar(id: number) {
    this.carritoServicio.aumentarCantidad(id)
  }
  disminuir(id: number) {
    this.carritoServicio.disminuirCantidad(id)
  }
  eliminar(id: number) {
    this.carritoServicio.eliminar(id);
    this.productosCarrito =
      this.carritoServicio.obtenerProd();
  }
  calcularTotal() {
    let total = 0;
    for (const producto of this.productosCarrito) {
      total += producto.precio * producto.cantidad;
    }
    return total;
  }
  vaciarCarrito():void{
    this.carritoServicio.vaciarCarrito();
    this.productosCarrito = [];
  }
}
