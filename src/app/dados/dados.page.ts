import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {
  private user: object;

  constructor() {
    this.user = {name: "Cassia", idade: "33", email: "caslencoispta@hotmail.com", telefone: "(14) 99999-9999"}
  }

  ngOnInit() {
  }

}
