import { Component } from '@angular/core';

@Component({
  selector: 'app-root',  //définit le nom de la balise HTML
  // qui représentera ce composant dans le reste de ton application.
  templateUrl: './app.component.html', //HTML associé au composant.
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
}
