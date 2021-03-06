// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms'
// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
// import { AppHeaderComponent } from './app.header.components';
// import { BoxaComponent } from './boxa/boxa.component';
// import { CustomerFormComponent } from './customer-form/customer-form.component';
// import { FormDisplayComponent } from './form-display/form-display.component';
// @NgModule({
//   declarations: [
//     AppComponent,
//     HomeComponent,
//     AppHeaderComponent,
//     BoxaComponent,
//     CustomerFormComponent,
//     FormDisplayComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule,
//     FormsModule
//   ],
//   providers: [],
//   bootstrap: [HomeComponent, AppHeaderComponent, AppComponent]
// })
// export class AppModule { }
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }