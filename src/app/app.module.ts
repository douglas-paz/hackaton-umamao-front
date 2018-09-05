import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostagensComponent } from './components/postagens/postagens.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SolicitationComponent } from './components/solicitation/solicitation.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { RegisterEventComponent } from './components/register-event/register-event.component';
import { PostagensProfileComponent } from './components/postagens-profile/postagens-profile.component';
import { ParceirosComponent } from './components/parceiros/parceiros.component';

import { HttpModule } from '@angular/http';
import { LayoutModule } from './modules/layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { DataService } from './services/data.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CustMaterialModule } from './modules/cust-material/cust-material.module';

export function jwtTokenGetter() {
  return localStorage.getItem('access_token');
}
const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: jwtTokenGetter
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    PostagensComponent,
    NavBarComponent,
    SolicitationComponent,
    PopUpComponent,
    RegisterEventComponent,
    PostagensProfileComponent,
    NavBarComponent,
    ParceirosComponent,  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot(JWT_Module_Options),
    HttpModule,
    HttpClientModule,
    SharedModule,
    CustMaterialModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    AuthGuard,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
