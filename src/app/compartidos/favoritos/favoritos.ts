import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoServicio } from '../../servicios/carrito-servicio';
import { FavoritoServicio } from '../../servicios/favorito-servicio';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-favoritos',
  imports: [RouterLink],
  templateUrl: './favoritos.html',
  styleUrl: './favoritos.css',
})
export class Favoritos {
  

  productosFavoritos: Producto[] = []
   constructor(
    private carritoServicio: CarritoServicio,
    private favoritoServicio: FavoritoServicio
  ) { }
  ngOnInit() {

    this.productosFavoritos =
      this.favoritoServicio.obtenerFavoritos()
  }

  eliminar(id: number) {
    this.favoritoServicio.eliminarFavorito(id);
    this.productosFavoritos =
      this.favoritoServicio.obtenerFavoritos();
  }
  agregarCarrito(p: Producto) {
    p.cantidad = 1;
    this.carritoServicio.agregarProducto(p);
  }


}

