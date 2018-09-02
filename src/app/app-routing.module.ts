import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import {PostagensComponent} from './components/postagens/postagens.component';

const routes: Routes = [
  {
    path: '' , component: HomeComponent,
  },
  {
    path: 'register' , component : RegisterComponent,
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'postagens', component: PostagensComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
