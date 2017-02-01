import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {ProfileComponent} from './components/profile.component';


import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
