import { Component, Input } from '@angular/core';
import { Empleado } from '../empleado.model';
import { CaracteristicasEmpleadoCComponent } from '../caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { NgFor } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-empleado-hijo-c',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CaracteristicasEmpleadoCComponent, NgFor],
  templateUrl: './empleado-hijo-c.component.html',
  styleUrl: './empleado-hijo-c.component.css'
})
export class EmpleadoHijoCComponent {
  @Input() empleadoDeLista:Empleado;
  @Input() indice:number;

  caracteristicas: string[] = [];

  agregarCaracteristica(nuevaCaracteristica: string) {
    this.caracteristicas.push(nuevaCaracteristica);
  }
}
