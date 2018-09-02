import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LayoutModule } from './modules/layout/layout.module';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { PostagensComponent } from './components/postagens/postagens.component';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    PostagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
