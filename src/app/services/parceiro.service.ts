import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Postagem } from '../models/postagem.model';
import { environment } from '../environments';

@Injectable()
export class ParceiroService {

  constructor(private http: Http) {
  }

  public getParceiros(): Promise<Array<Postagem>> {
    return this.http.get(`${environment.API_URL}/parceiros`)
      .toPromise()
      .then((resposta: any) => resposta.json());
  }
}
