import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { MapComponent }      from './map/map.component';
<<<<<<< HEAD
import { MenuTypeComponent} from './pages/menu-type/menu-type.component';
import { MenuComponent} from './pages/menu/menu.component'; 
=======
import {MenuTypeComponent} from './pages/menu-type/menu-type.component';
import {DishComponent} from './pages/dish/dish.component';

>>>>>>> 89ce48fb0a4226753446fe0f0662ddcd171eb7bf

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path:'menutype', component: MenuTypeComponent},
<<<<<<< HEAD
  { path:'menu',component: MenuComponent}

=======
  { path:'dish', component: DishComponent}
>>>>>>> 89ce48fb0a4226753446fe0f0662ddcd171eb7bf
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
