import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {

  name: string = "Henrique"
  age: number = 30
  job = "Analista"
  hobbies = ["Jogar", "beber", "viajar"]
  car = {
    name: "Polo",
    year: 2020
  }

}
