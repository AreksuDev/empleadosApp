import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Empleado } from './empleado.model';
import { NgFor } from '@angular/common';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { ConfirmarServiceService } from './confirmar-service.service';
import { EmpleadosService } from './empleados.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, EmpleadoHijoCComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  titulo = 'Listado de empleados';
  
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  empleados: Empleado[] = [];

  constructor(/*private confirmarServicio: ConfirmarServiceService,*/ private empleadosService: EmpleadosService){
    //this.empleados = this.empleadosService.empleados;
  }
  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    throw new Error('Method not implemented.');
  }

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.confirmarServicio.abrirVentana(`Nombre del empleado: ${miEmpleado.nombre}`);
    this.empleadosService.agregarEmpleadoService(miEmpleado);
  }
}
