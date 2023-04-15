import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})
export class BmiComponent {

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
      this.risultato = parseFloat(this.peso) / (parseFloat(this.altezza) * parseFloat(this.altezza));
      this.accMsg = "Il tuo BMI e' : " + Math.round(this.risultato);
      this.calcolo = true;
      
      console.log(this.peso);
      console.log(this.altezza);
      console.log(this.eta);
      console.log(this.sesso);
    } else if (this.sesso == "uomo"){
      this.risultato = parseFloat(this.peso) / (parseFloat(this.altezza) * parseFloat(this.altezza));
      this.accMsg = "Il tuo BMI e' : " + Math.round(this.risultato);
      this.calcolo = true;
      
      console.log(this.peso);
      console.log(this.altezza);
      console.log(this.eta);
      console.log(this.sesso);
    } else {
      console.log(this.errMsg);
    }

  }

}

