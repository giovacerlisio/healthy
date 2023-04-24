import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

export interface PeriodicElement {

}




//const ELEMENT_DATA: Alimenti[] = [

//];


@Component({
  selector: 'app-alimenti',
  templateUrl: './alimenti.component.html',
  styleUrls: ['./alimenti.component.scss']
})
export class AlimentiComponent {
  private serverUrl = 'http://localhost:8081/api/listalimenti';

  constructor (private http: HttpClient) {

    

  }

  ngOnInit() {          
    this.http.get<any>(this.serverUrl)
    .subscribe(data => {
        console.log(data)
    })
}



  //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  //dataSource = ELEMENT_DATA;

}
