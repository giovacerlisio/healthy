import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { BmiService } from '../bmi.service';

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
  Msg : string = " ";
  private serverUrl = 'http://localhost:8081/api/bmi';


  constructor (private formBuilder : FormBuilder, private http: HttpClient) {


    this.form = this.formBuilder.group({

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


    

    let {altezza, peso, eta, sesso} = this.form.value

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

