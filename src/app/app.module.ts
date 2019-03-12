import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';

import { MapComponent } from './map/map.component';
import { MenuTypeComponent } from './pages/menu-type/menu-type.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { MenuCategoryComponent } from './pages/menu-category/menu-category.component';
import { HttpModule, ConnectionBackend, RequestOptions} from '@angular/http';
import { DishComponent } from './pages/dish/dish.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    MapComponent,
    MenuTypeComponent,
    MenuCategoryComponent,
    DishComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule

    
  ],
  providers: [HttpModule],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
