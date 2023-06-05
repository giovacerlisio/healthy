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
  private serverUrlDelete = 'http://localhost:8081/api/deletealimento/';
  private serverUrlModify = 'http://localhost:8081/api/getalimentoby/';
  ELEMENT_DATA: Alimenti[] = [
  ];
  Variabile: Alimenti[] = [];

  displayedColumns: string[] = ['nome', 'calorie', 'peso', 'modifica', 'elimina'];



  constructor (private http: HttpClient) {

  console.log(this.ELEMENT_DATA)

}

  ngOnInit() {
    this.http.get<Alimenti[]>(this.serverUrl)
    .subscribe((data) => {

        this.ELEMENT_DATA = data;
    })

    console.log(this.ELEMENT_DATA)

}


  elimina(id: string) {

    this.http.delete(this.serverUrlDelete + id)
    .subscribe(() => console.log("eliminato"))

    window.location.reload()
}

  modifica(id: string) {

    this.http.get(this.serverUrlModify + id)
    .subscribe((data) => console.log(data))

  }




}
