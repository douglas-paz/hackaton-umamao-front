import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  headers = new Headers();

  register(value: any): any {
    throw new Error("Method not implemented.");
  }

  constructor(private httpClient: HttpClient) { }

  public getUser(username: string, password: string) {
    return this.httpClient.get(`${environment.API_URL}/profile?username=${username}/`);
  }

  public signup(user: User) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Cache-Control', 'no-cache');
    this.headers.append('Access-Control-Allow-Methods', 'GET, POST');
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type, Accept');
    this.headers.append('Access-Control-Max-Age', '1728000');

    return this.httpClient.post(`${environment.API_URL}/profile/`, user);
  }

  public changeName() {
    
  }
}