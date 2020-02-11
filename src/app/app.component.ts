import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  constructor( ) { }
  value = 'Dure horas para poder acabarlo y solo era quitarle el .value a myInput en el HTML';
  update(myInput: HTMLInputElement): void{
    console.log(myInput.value)
    this.value = myInput.value;
  }
}
