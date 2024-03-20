import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmarServiceService {

  constructor() { }
  abrirVentana(mensaje: string){
    alert(mensaje);
  }
}
