import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UpdateEmpleadoComponent } from './update-empleado/update-empleado.component';
import firebase from 'firebase/compat/app';
import { LoginService } from './login/login.service';
import { NgIf } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, HomeComponent, ProyectosComponent, QuienesSomosComponent, ContactoComponent, UpdateEmpleadoComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  constructor(private loginService: LoginService){}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyCNUGCVAoiL68AnSqSkm7CoGxYTEpMOA7A",
      authDomain: "mis-clientes-8527b.firebaseapp.com",
    })
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }

}
