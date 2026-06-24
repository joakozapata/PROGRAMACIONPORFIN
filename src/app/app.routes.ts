import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Contacto } from './paginas/contacto/contacto';
import { Ofertas } from './paginas/ofertas/ofertas';
import { Productos } from './paginas/productos/productos';
import { InicioSesion } from './auth/inicio-sesion/inicio-sesion';
import { Registro } from './auth/registro/registro';
import { Carrito } from './compartidos/carrito/carrito';
import { Favoritos } from './compartidos/favoritos/favoritos';

export const routes: Routes = [
    {path:'',redirectTo:'inicio',pathMatch:'full'},
    {path:'inicio',component: Inicio},
    {path:'contacto',component: Contacto},
    {path:'ofertas',component: Ofertas},
    {path:'productos',component: Productos},
    {path:'inicio-sesion',component: InicioSesion},
    {path:'registro',component: Registro},
    {path:'carrito',component:Carrito},
    {path:'favoritos',component:Favoritos},
    {path:'**',redirectTo: 'inicio'}
];
