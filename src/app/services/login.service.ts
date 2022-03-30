import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000/Login"

  constructor(private httpClient: HttpClient) { }

  getLogin(): Observable<Login[]>{
    return this.httpClient.get<Login>(this.url)
  }
}
