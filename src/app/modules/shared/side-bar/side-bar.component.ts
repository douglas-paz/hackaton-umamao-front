import { MatSidenav } from '@angular/material';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  @ViewChild('sidenav') public sidenav: MatSidenav;
  mode = new FormControl('over');
  menu: Object;
  constructor(
    private router: Router,
  ) { }

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


  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

}
