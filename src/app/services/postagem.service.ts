import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Postagem} from '../models/postagem.model';
import {environment} from '../environments';

@Injectable()
export class PostagemService {

  constructor(private http: Http) {
  }

  public getPostagens(): Promise<Array<Postagem>> {
    return this.http.get(`${environment.API_URL}/postagens`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }
}
