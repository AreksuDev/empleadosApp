import { Component } from '@angular/core';
import { Empleado } from '../empleado.model';
import { HomeComponent } from '../home/home.component';
import { EmpleadosService } from '../empleados.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-update-empleado',
  standalone: true,
  imports: [ RouterOutlet, FormsModule, HomeComponent],
  templateUrl: './update-empleado.component.html',
  styleUrl: './update-empleado.component.css'
})
export class UpdateEmpleadoComponent {
  empleados: Empleado[];
  cuadroNombre: string;
  cuadroApellido: string;
  cuadroCargo: string;
  cuadroSalario: number;
  indice: number;
  accion: string;
  constructor(private router: Router, private empleadosService: EmpleadosService, private route: ActivatedRoute){}
  volverHome(){
    this.router.navigate(['']);
  }

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
    this.indice = this.route.snapshot.params['id'];
    let empleado: Empleado = this.empleadosService.encontrarEmpleado(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;
    this.accion = this.route.snapshot.queryParams['accion'];
  }

  // actualizarEmpleado(){
  //   let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
  //   this.empleadosService.actualizarEmpleado(miEmpleado, this.indice);
  //   this.router.navigate(['']);
  // }

  // eliminarEmpleado(){
  //   this.empleadosService.eliminarEmpleado(this.indice);
  //   this.router.navigate(['']);
  // }

  actualizarEmpleado(){
    if (this.accion == "actualizar"){
      let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
      this.empleadosService.actualizarEmpleado(miEmpleado, this.indice);
      this.router.navigate(['']);
    } else if (this.accion == "eliminar"){
      this.empleadosService.eliminarEmpleado(this.indice);
      this.router.navigate(['']);
    }
  }


}
