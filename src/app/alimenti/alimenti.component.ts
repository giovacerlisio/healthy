import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs';



export interface Alimenti {

  id: number
  nome: string
  calorie: string
  peso: string

}


@Component({
  selector: 'app-alimenti',
  templateUrl: './alimenti.component.html',
  styleUrls: ['./alimenti.component.scss']
})

export class AlimentiComponent {
  private serverUrl = 'http://localhost:8081/api/listalimenti';
  ELEMENT_DATA: Alimenti[] = [
  ];
  Variabile: Alimenti[] = [];

  displayedColumns: string[] = ['nome', 'calorie', 'peso'];



  constructor (private http: HttpClient) {

  console.log(this.ELEMENT_DATA)

}

  ngOnInit() {
    this.http.get<Alimenti[]>(this.serverUrl)
    .subscribe((data) => {
        console.log(data)
        console.log(this.ELEMENT_DATA)

        this.ELEMENT_DATA = data;
    })

    console.log(this.ELEMENT_DATA)
    console.log("ciao")

}





}
