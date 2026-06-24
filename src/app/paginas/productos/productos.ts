import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { CarritoServicio } from '../../servicios/carrito-servicio';
import { FavoritoServicio } from '../../servicios/favorito-servicio';

@Component({
  selector: 'app-productos',
  imports: [],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
  standalone:true
})
export class Productos {

  constructor(
    private CarritoServicio: CarritoServicio,
    private FavoritoServicio: FavoritoServicio
  ) { }

  Productos: Producto[] = [
    {
      id: 0,
      nombre: "camiseta",
      descripcion: "camiseta racing 2001",
      precio: 10000,
      imagen: '/assets/images.jfif',
      stock: 7,
      talle: 'M',
      disponibilidad: true,
      cantidad:1
    },
    {
      id: 1,
      nombre: 'camiseta racing nike',
      descripcion: 'camiseta titular racing 2026',
      precio: 100000,
      imagen: '/assets/camiseta-racing202.webp',
      stock: 7,
      talle: 'M',
      disponibilidad: true,
      cantidad:1
    },
    {
      id: 2,
      nombre: 'botines nike air zoom',
      descripcion: 'botines nike air zoom tapones mixtos',
      precio: 230000,
      imagen: '/assets/air-zoom.webp',
      stock: 18,
      talle: '42',
      disponibilidad: true,
      cantidad:1

    },
    {
      id: 3,
      nombre: 'camiseta titular argentina',
      descripcion: 'camiseta titular argentina mundial 2026',
      precio: 120000,
      imagen: '/assets/argentina.webp',
      stock: 20,
      talle: 'L',
      disponibilidad: true,
      cantidad:1

    },
    {
      id: 4,
      nombre: 'botines nike superfly ',
      descripcion: 'botines nike superfly blanco con azul',
      precio: 10000,
      imagen: '/assets/superfly.webp',
      stock: 7,
      talle: 'M',
      disponibilidad: true,
      cantidad:1
    },
    {
      id: 5,
      nombre: 'botines adidas f50 ',
      descripcion: 'adidas f50 negro',
      precio: 256000,
      imagen: '/assets/f50.webp',
      stock: 12,
      talle: '43',
      disponibilidad: true,
      cantidad:1
    }
  ]
  agregarCarrito(p: Producto) {
    this.CarritoServicio.agregarProducto(p);
  }
  agregarFavorito(f: Producto) {
    this.FavoritoServicio.agregarFavorito(f);
  }
  
}  