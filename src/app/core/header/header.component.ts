import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ServizioService } from 'src/app/servizio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nome = "Giovanni"
  @Output() evento = new EventEmitter<string>();

  //
  constructor(public servizio: ServizioService) {
    servizio.soggetto.next(this.nome);
  }

   ngOnInit(): void {
    this.evento.emit(this.nome);
  }

}
