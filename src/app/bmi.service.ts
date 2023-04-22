import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmiService {
  http: any;
  private serverUrl = 'http://localhost:8090/api/bmi';

  constructor() { }

  bmicalc() {
    this.http.post(this.serverUrl,
      {peso: 70, altezza: 1.70, eta: 17, sesso: "uomo"},
      {headers:Headers})
      .map((res: Response) => res.json())
  }
}
