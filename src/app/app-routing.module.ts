import { AuthService } from './auth/auth.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { PostagensComponent } from './components/postagens/postagens.component';

const routes: Routes = [
  {
    path: '' , component: HomeComponent,
  },
  {
    path: 'signup' , 
    component : RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: ''
  },
  {
    path: 'postagens', component: PostagensComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: [ AuthGuardService, AuthService ]
})
export class AppRoutingModule { }
