import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { Empleado } from '../empleado.model';
import { HomeComponent } from '../home/home.component';
import { EmpleadosService } from '../empleados.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  imports: [RouterOutlet, FormsModule, HomeComponent],
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
  empleados: Empleado[];
  cuadroNombre: string;
  cuadroApellido: string;
  cuadroCargo: string;
  cuadroSalario: number;
  constructor(private router: Router, private empleadosService: EmpleadosService){}
  volverHome(){
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  agregarEmpleado(){
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.confirmarServicio.abrirVentana(`Nombre del empleado: ${miEmpleado.nombre}`);
    this.empleadosService.agregarEmpleadoService(miEmpleado);
    this.router.navigate(['']);
  }
}
