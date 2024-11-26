import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  //declarer les components
  declarations: [
    AppComponent,
    ResidencesComponent,
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],


//les services
  providers: [],

  bootstrap: [AppComponent]  //bootstrap indique quel composant Angular sera lancé en premier lorsque l’application démarre.
})







export class AppModule { }
