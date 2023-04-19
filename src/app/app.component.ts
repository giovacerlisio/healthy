import { Component } from '@angular/core';
import { ServizioService } from './servizio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'healthy';
  nome = ""

constructor(public servizio: ServizioService) {
  servizio.soggetto.subscribe(nome => {
    this.nome = nome;
  })
  }

  initializeName(nome:string) {
    this.nome = nome;
  }
}
