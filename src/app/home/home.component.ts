import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadoHijoCComponent } from '../empleado-hijo-c/empleado-hijo-c.component';
import { EmpleadosService } from '../empleados.service';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgFor, EmpleadoHijoCComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
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
    // this.empleados = this.empleadosService.empleados;
    this.empleadosService.obtenerEmpleados().subscribe(misEmpleados=>{
      //console.log(misEmpleados);
      this.empleados = Object.values(misEmpleados);
      this.empleadosService.setEmpleados(this.empleados);
    });
  }

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.confirmarServicio.abrirVentana(`Nombre del empleado: ${miEmpleado.nombre}`);
    this.empleadosService.agregarEmpleadoService(miEmpleado);
  }
}
