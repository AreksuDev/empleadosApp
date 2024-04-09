import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { LoginService } from "./login.service";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class LoginGuardian implements CanActivate{
    constructor (private LoginService: LoginService, private Router: Router){};
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.LoginService.estaLogueado()){
            return true;
        } else {
            this.Router.navigate(['login']);
            return false;
        }
    }
    
}