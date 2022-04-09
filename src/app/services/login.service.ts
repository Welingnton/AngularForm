import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/login';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000/Login"

  constructor(private httpClient: HttpClient) { }
   
  }
