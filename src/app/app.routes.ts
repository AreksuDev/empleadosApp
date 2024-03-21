import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UpdateEmpleadoComponent } from './update-empleado/update-empleado.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'quienesSomos', component: QuienesSomosComponent},
    {path: 'contacto', component: ContactoComponent},
    {path: 'actualizarEmpleado/:id', component: UpdateEmpleadoComponent},
    
    {path: '**', component: ErrorPersonalizadoComponent}
];
