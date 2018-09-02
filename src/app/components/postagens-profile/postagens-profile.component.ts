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

  public postagens: Object;
  public textoAcao = 'Dar uma mão';
  public tipoAcao = 'AJUDAR';

  constructor(
    private postagemServices: PostagemService
  ) { }

  ngOnInit() {
    // this.postagemServices.getPostagens().then((response) => {
    //   this.postagens = response;
    // }).catch((erro) => {
    //   console.log(erro);
    // });
    this.postagens = [
      {
        "conclusion_status": false,
        "date": "01/09/2018",
        "local": "Sicredi Digital",
        "title": "Carona para a CB",
        "description": "Alguém vai para a feira de rua da Lima no domingo?...",
        "photo": "../assets/img/postagem1.jpg",
        "post_id": 1
      },
      {
        "conclusion_status": false,
        "date": "01/09/2018",
        "local": "Sicredi Digital",
        "title": "Doação de livros",
        "description": "Estou doando livros, temas diversos...",
        "photo": "../assets/img/postagem2.jpg",
        "post_id": 1
      },
      {
        "conclusion_status": false,
        "date": "01/09/2018",
        "local": "Praça Bonita",
        "title": "Passeio com cão",
        "description": "Todo fim de tarde fico na Praça Bonita com o Pipoca, meu poodle...",
        "photo": "../assets/img/postagem3.jpg",
        "post_id": 1
      },
      {
        "conclusion_status": false,
        "date": "01/09/2018",
        "local": "Asilo Casa Grande.",
        "title": "Pintura muro",
        "description": "Ajuda para pintar muro pichado do Asilo Casa...",
        "photo": "../assets/img/postagem4.jpg",
        "post_id": 1
      }
    ];
  }


}
