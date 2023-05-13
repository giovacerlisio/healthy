import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Validators } from '@angular/forms';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';

@Component({
  selector: 'app-postalimenti',
  templateUrl: './postalimenti.component.html',
  styleUrls: ['./postalimenti.component.scss']
})
export class PostalimentiComponent {

  formcalorie : FormGroup
  myControl = new FormControl('');

  risultato: number = 0;
  calcolo: boolean = false;
  accMsg: string = "Hai inserito il tuo alimento";
  errMsg: string = "Errore ";
  Msg : string = " ";
  private serverUrl = 'http://localhost:8081/api/alimenti';


  constructor (private formBuilder : FormBuilder, private http: HttpClient) {


    this.formcalorie = this.formBuilder.group({

      peso: new FormControl<string>(" ", Validators.required),
      calorie: new FormControl<string>(" ", Validators.required),
      nome: new FormControl<string>(" ", Validators.required),

    });

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  calcola() {


    

    let {calorie, peso, nome} = this.formcalorie.value

    this.http.post(this.serverUrl,
      { peso: peso, calorie: calorie, nome: nome}
    ).subscribe(response => {
      console.log(response);
      this.Msg = String(response);
    });

  this.calcolo = true;

  window.location.href='/alimenti';
    

  }

}
