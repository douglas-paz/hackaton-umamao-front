import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  menu: Object;
  constructor() { }

  ngOnInit() {
    this.menu = [
      {
        name:"NOTIFICAÇÕES",
        link:"notificacoes",
        icon:"../../../../assets/img/notificacoes.png"
      },
      {
        name:"BATE-PAPO",
        link:"chat",
        icon:"../../../../assets/img/batepapo.png"
      },
      {
        name:"VIZINHOS",
        link:"notificacoes",
        icon:"../../../../assets/img/vizinhos.png"
      },
      {
        name:"PARCEIROS DO BAIRRO",
        link:"parceiros",
        icon:"../../../../assets/img/parceirosdobairro.png"
      },
      {
        name:"CALENDÁRIO",
        link:"calendario",
        icon:"../../../../assets/img/calendario.png"
      }
    ]
  }

}
