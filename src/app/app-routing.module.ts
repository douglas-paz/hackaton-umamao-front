import { AuthService } from './auth/auth.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { PostagensComponent } from './components/postagens/postagens.component';
import { SideBarComponent } from './modules/shared/side-bar/side-bar.component';
import {ParceirosComponent} from './components/parceiros/parceiros.component';
import {SolicitationComponent} from './components/solicitation/solicitation.component';

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
    path: 'postagens', component: PostagensComponent
  },
  {
    path: 'parceiros', component: ParceirosComponent
  },
  {
    path: 'menu',
    component: SideBarComponent
  },
  {
    path: 'solicitation',
    component: SolicitationComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  providers: [ AuthGuardService, AuthService ]
})
export class AppRoutingModule { }
