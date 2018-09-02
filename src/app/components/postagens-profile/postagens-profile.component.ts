import { Component, OnInit } from '@angular/core';
import { PostagemService } from '../../services/postagem.service';
import { Postagem } from '../../models/postagem.model';

@Component({
  selector: 'app-postagens-profile',
  templateUrl: './postagens-profile.component.html',
  styleUrls: ['./postagens-profile.component.css'],
  providers: [ PostagemService ]

})
export class PostagensProfileComponent implements OnInit {

  public postagens: Array<Postagem>;
  public textoAcao = 'Dar uma mão';
  public tipoAcao = 'AJUDAR';

  constructor(
    private postagemServices: PostagemService
  ) { }

  ngOnInit() {
    this.postagemServices.getPostagens().then((response) => {
      this.postagens = response;
    }).catch((erro) => {
      console.log(erro);
    });
  }


}
