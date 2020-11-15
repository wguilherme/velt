
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components

import { AppComponent } from './app.component';
import {CompanyDetailComponent} from './pages/company-detail/company-detail.component';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';



const routes: Routes = [
  { path: '', redirectTo: "dashboard", pathMatch: "full" },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'company/:id', pathMatch: 'full', component: CompanyDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
