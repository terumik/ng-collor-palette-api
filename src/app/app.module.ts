import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ColorSortComponent } from './color-sort/color-sort.component';
import { BrushSortComponent } from './brush-sort/brush-sort.component';
import { HeaderComponent } from './header/header.component';
import { routing } from './app-routing';
import { HomeComponent } from './home/home.component';

// Bootstrap
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    ColorSortComponent,
    BrushSortComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    routing,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
