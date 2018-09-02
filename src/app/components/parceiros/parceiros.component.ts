import { Component, OnInit } from '@angular/core';
import {ParceiroService} from '../../services/parceiro.service';
import {Parceiro} from '../../models/parceiro.model';

@Component({
  selector: 'app-parceiros',
  templateUrl: './parceiros.component.html',
  styleUrls: ['./parceiros.component.css'],
  providers: [ ParceiroService ]
})
export class ParceirosComponent implements OnInit {

  public parceiros: Array<Parceiro>;
  public textoAcao = 'Saiba mais';
  public sideBar = false;

  constructor(
    private parceiroServices: ParceiroService
  ) { }

  ngOnInit() {
    this.parceiroServices.getParceiros().then((response) => {
      console.log(response);
      this.parceiros = response;
    }).catch((erro) => {
      console.log(erro);
    });
  }

  public toggleNavbar() {
    this.sideBar = !this.sideBar;
  }

}
