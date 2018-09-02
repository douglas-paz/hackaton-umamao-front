import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LayoutModule } from './modules/layout/layout.module';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { PostagensComponent } from './components/postagens/postagens.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { DataService } from './services/data.service';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { SharedModule } from './modules/shared/shared.module';
import { SolicitationComponent } from './components/solicitation/solicitation.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import {ParceirosComponent} from './components/parceiros/parceiros.component';
import {SideBarComponent} from './modules/shared/side-bar/side-bar.component';

const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: () => {
      return localStorage.getItem('access_token');
    }
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
    NavBarComponent,
    ParceirosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    JwtModule.forRoot(JWT_Module_Options),
    HttpModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    AuthGuard,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
