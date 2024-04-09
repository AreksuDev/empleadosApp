import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { LoginService } from './login/login.service';
import { CookieService } from 'ngx-cookie-service';
import { LoginGuardian } from './login/login_guardian';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch()), LoginService, CookieService, LoginGuardian]
};
