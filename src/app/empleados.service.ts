import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ConfirmarServiceService } from './confirmar-service.service';
import { DataServices } from './data.services';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  empleados: Empleado[] = [];
  // empleados: Empleado[] = [
  //   new Empleado("Juan", "Díaz", "Presidente", 7500),
  //   new Empleado("Ana", "Martín", "Directora", 5500),
  //   new Empleado("María", "Fernández", "Jefa sección", 3500),
  //   new Empleado("Laura", "López", "Administrativo", 4500),
  // ]
  constructor(private servicioConfirmar: ConfirmarServiceService, private dataService: DataServices) { }

  obtenerEmpleados(){
    return this.dataService.cargarEmpleados();
  }

  agregarEmpleadoService(empleado: Empleado){
    this.servicioConfirmar.abrirVentana(`Persona que se va a agregar \n${empleado.nombre}\nSalario: ${empleado.salario}`);
    this.empleados.push(empleado);
    this.dataService.guardarEmpleados(this.empleados);
  }

  setEmpleados(misEmpleados: Empleado[]){
    this.empleados = misEmpleados;
  }

  encontrarEmpleado(indice: number): Empleado {
    let empleado: Empleado = this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(empleado: Empleado, indice: number){
    let empleadoActualizado: Empleado = this.empleados[indice];
    empleadoActualizado.nombre = empleado.nombre;
    empleadoActualizado.apellido = empleado.apellido;
    empleadoActualizado.cargo = empleado.cargo;
    empleadoActualizado.salario = empleado.salario;
    this.dataService.actualizarEmpleado(indice, empleado);
  }

  eliminarEmpleado(indice: number){
    this.empleados.splice(indice, 1);
    this.dataService.eliminararEmpleado(indice);
    if (this.empleados != null) this.dataService.guardarEmpleados(this.empleados);
  }
}
