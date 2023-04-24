import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-calorie',
  templateUrl: './calorie.component.html',
  styleUrls: ['./calorie.component.scss']
})

export class CalorieComponent implements OnInit {

  formcalorie : FormGroup
  myControl = new FormControl('');

  risultato: number = 0;
  calcolo: boolean = false;
  accMsg: string = "Il tuo BMI e' : ";
  errMsg: string = "Errore ";
  Msg : string = " ";
  private serverUrl = 'http://localhost:8081/api/calorie';


  constructor (private formBuilder : FormBuilder, private http: HttpClient) {


    this.formcalorie = this.formBuilder.group({

      peso: new FormControl<string>(" ", Validators.required),
      altezza: new FormControl<string>(" ", Validators.required),
      eta: new FormControl<string>(" ", Validators.required),
      sesso: new FormControl<string>(" ", Validators.required),

    });

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  calcola() {


    

    let {altezza, peso, eta, sesso} = this.formcalorie.value

    this.http.post(this.serverUrl,
      { peso: peso, altezza: altezza, eta: eta, sesso: sesso }
    ).subscribe(response => {
      console.log(response);
      this.Msg = String(response);
    });
    



    if(!String(altezza).includes(".")){
      throw new Error("Qualcosa e' andato sbagliato");
    }

  }

}

