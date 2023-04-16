import { Component } from '@angular/core';

@Component({
  selector: 'app-calorie',
  templateUrl: './calorie.component.html',
  styleUrls: ['./calorie.component.scss']
})
export class CalorieComponent {

  peso: string = "";
  altezza: string = "";
  eta: string = "" ;
  sesso: string = "";
  risultato: number = 0;
  calcolo: boolean = false;

  accMsg: string = "Il tuo BMI e' : ";
  errMsg: string = "Errore ";

  calcola = (): void => {


  }

}
