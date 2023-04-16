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

    if(this.sesso == "donna"){
      
      this.risultato = 655.1 + (9.6 * parseFloat(this.peso)) + (1.9 * parseFloat(this.altezza)) -(4.7 * parseFloat(this.eta));
      this.accMsg = "Il tuo MET Basale e' : " + Math.round(this.risultato);
      this.calcolo = true;

    } else if (this.sesso == "uomo"){

      this.risultato = 66.5 + (13.8 * parseFloat(this.peso)) + (5 * parseFloat(this.altezza)) -(6.8 * parseFloat(this.eta));
      this.accMsg = "Il tuo MET Basale e' : " + Math.round(this.risultato);
      this.calcolo = true;

    } else {
      console.log(this.errMsg);
    }

  }

}
