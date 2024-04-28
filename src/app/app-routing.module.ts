import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./public/pages/home/home.component";
import {PlansComponent} from "./public/pages/plans/plans.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'plans', component: PlansComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
