import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { MapComponent }      from './map/map.component';
import {MenuTypeComponent} from './pages/menu-type/menu-type.component';
import {DishComponent} from './pages/dish/dish.component';


const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path:'menutype', component: MenuTypeComponent},
  { path:'dish', component: DishComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), 
    BrowserModule, 
    // import HttpClientModule after BrowserModule.
    HttpClientModule,],
  exports: [RouterModule],
  
})
export class AppRoutingModule { 
  
}
