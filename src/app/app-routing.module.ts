import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { MapComponent }      from './map/map.component';
import { MenuTypeComponent} from './pages/menu-type/menu-type.component';
import { MenuComponent} from './pages/menu/menu.component'; 

const routes: Routes = [
  { path: 'map', component: MapComponent },
  { path:'menutype', component: MenuTypeComponent},
  { path:'menu',component: MenuComponent}

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
