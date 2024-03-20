import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-caracteristicas-empleado-c',
  standalone: true,
  imports: [],
  templateUrl: './caracteristicas-empleado-c.component.html',
  styleUrl: './caracteristicas-empleado-c.component.css'
})
export class CaracteristicasEmpleadoCComponent {
  @Output() caracteristicasEmpleados = new EventEmitter<string>();
  agregaCaracteristicas(value: string) {
    this.caracteristicasEmpleados.emit(value);
  }
}
