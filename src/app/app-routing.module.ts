import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './access/enter/login/login.component';
import { RegisterComponent } from './access/enter/register/register.component';
import {HomeComponent} from "./public/pages/home/home.component";
import {PlansComponent} from "./public/pages/plans/plans.component";
import {authGuard} from "./access/guards/auth.guard";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  { path: 'home',
    component: HomeComponent,
    canActivate: [authGuard]
  },
  { path: 'plans',
    component: PlansComponent,
    canActivate: [authGuard]
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
