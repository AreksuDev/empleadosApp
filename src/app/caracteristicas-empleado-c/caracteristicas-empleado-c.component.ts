import { Component, Output, EventEmitter, Injectable } from '@angular/core';
import { ConfirmarServiceService } from '../confirmar-service.service';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  standalone: true,
  imports: [],
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {
  @Output() caracteristicasEmpleados = new EventEmitter<string>();

  //constructor(private confirmarServicio: ConfirmarServiceService){}
  
  agregaCaracteristicas(value: string) {
    //this.confirmarServicio.abrirVentana(value)
    //this.caracteristicasEmpleados.emit(value);
  }
}
