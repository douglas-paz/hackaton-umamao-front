import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  register(value: any): any {
    throw new Error("Method not implemented.");
  }

  constructor(private httpClient: HttpClient) { }

  public getUser(username: string, password: string) {
    return this.httpClient.get(`${environment.API_URL}/profile/${username}`);
  }

  public signup(user: User) {
    console.log(user);
    return this.httpClient.post(`${environment.API_URL}/users`, user);
  }
}