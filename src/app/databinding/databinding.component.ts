import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles: [`
        .red-border {
            border: 1px solid red;
        }
  
  `]

})
export class DatabindingComponent {
aString = 'Ich bin ein String';
aNumber = 100;
attachClass = false;
hintergrund = 'blue';
schrift = 12;

constructor() {
  setTimeout(() => {
    this.aNumber += 200;
    this.attachClass = true;
    this.hintergrund = 'red';
    this.schrift = 18;
      }, 3000);
}

keksi(event) {
  let a = 5;
  let b = 2;
  console.log(event);
  alert(a + b);

}
}
