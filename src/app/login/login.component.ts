import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  listaLogin = [] as Login[]


  ngOnInit(): void {
    this.carregarLogin()
  }
  carregarLogin() {
    this.loginService.getLogin().subscribe((loginRecebidos: Login[])=> {
      this.listaLogin = loginRecebidos;
      console.log(this.listaLogin);
    })
  }

}
