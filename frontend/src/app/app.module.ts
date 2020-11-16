import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//http
import { HttpClientModule } from '@angular/common/http';
import { CompanyDetailComponent } from './pages/company-detail/company-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';


import { NgxEchartsModule } from 'ngx-echarts'

@NgModule({
  declarations: [
    AppComponent,
    CompanyDetailComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })




  ],
  exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
