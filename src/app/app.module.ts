import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import HomeComponent from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent}

];


@NgModule({
  declarations: [
    AppComponent, HomeComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
