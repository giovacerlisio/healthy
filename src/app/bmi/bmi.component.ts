import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-bmi',
  templateUrl: './bmi.component.html',
  styleUrls: ['./bmi.component.scss']
})

export class BmiComponent implements OnInit {

  form : FormGroup
 myControl = new FormControl('');

  risultato: number = 0;
  calcolo: boolean = false;
  accMsg: string = "Il tuo BMI e' : ";
  errMsg: string = "Errore ";
  caso = ["uomo", "donna"]
  //  filteredOptions!: Observable<string[]>;
      filteredOptions : string[] = []


  constructor (private formBuilder : FormBuilder) {


    this.form = this.formBuilder.group({

      peso: new FormControl<string>(" ", Validators.required),
      altezza: new FormControl<string>(" ", Validators.required),
      eta: new FormControl<string>(" ", Validators.required),
      sesso: new FormControl<string>("", Validators.required),

    });

  }

   ngOnInit() {
     this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    ).subscribe((values) => {
      this.filteredOptions = [...values]
    });

  }

  //peso: string = "";
  // altezza: string = "";
  // eta: string = "" ;
  // sesso: string = "";
  // risultato: number = 0;
  // calcolo: boolean = false;



private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.caso.filter(option => option.toLowerCase().includes(filterValue));
  }

  calcola() {

    let {altezza, peso, eta, sesso} = this.form.value


    if(!String(altezza).includes(".")){
      throw new Error("Qualcosa e' andato sbagliato");
    }


    if( sesso == "donna"){
      this.risultato = parseFloat(peso) / (parseFloat(altezza) * parseFloat(altezza));
      this.accMsg +=   + Math.round(this.risultato);
      this.calcolo = true;

      console.log(peso);
      console.log(altezza);
      console.log(eta);
      console.log(sesso);
    } else if (sesso == "uomo"){
      this.risultato = parseFloat(peso) / (parseFloat(altezza) * parseFloat(altezza));
      this.accMsg +=  + Math.round(this.risultato);
      this.calcolo = true;

      console.log(peso);
      console.log(altezza);
      console.log(eta);
      console.log(sesso);
    } else {
      console.log(this.errMsg);
    }

  }

}

