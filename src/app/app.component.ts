import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Databinding</h1>
    <hr>
    <app-databinding></app-databinding>
  `,
styles: [` 
    h1{
    color: red;
  }
`]
})
export class AppComponent {

}
