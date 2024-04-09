import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { UpdateEmpleadoComponent } from './update-empleado/update-empleado.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { LoginComponent } from './login/login.component';
import { LoginGuardian } from './login/login_guardian';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'proyectos', component: ProyectosComponent},
    {path: 'quienesSomos', component: QuienesSomosComponent, canActivate:[LoginGuardian]},
    {path: 'contacto', component: ContactoComponent, canActivate:[LoginGuardian]},
    {path: 'actualizarEmpleado/:id', component: UpdateEmpleadoComponent},
    {path: 'login', component: LoginComponent},
    
    {path: '**', component: ErrorPersonalizadoComponent}
];
