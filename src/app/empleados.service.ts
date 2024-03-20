import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ConfirmarServiceService } from './confirmar-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {
  empleados: Empleado[] = [
    new Empleado("Juan", "Díaz", "Presidente", 7500),
    new Empleado("Ana", "Martín", "Directora", 5500),
    new Empleado("María", "Fernández", "Jefa sección", 3500),
    new Empleado("Laura", "López", "Administrativo", 4500),
  ]
  constructor(private servicioConfirmar: ConfirmarServiceService) { }
  agregarEmpleadoService(empleado: Empleado){
    this.servicioConfirmar.abrirVentana(`Persona que se va a agregar \n${empleado.nombre}\nSalario: ${empleado.salario}`);
    this.empleados.push(empleado);
  }
}