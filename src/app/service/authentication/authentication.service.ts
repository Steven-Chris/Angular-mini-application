import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SinginData } from 'src/app/model/singinData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly mockUser = new SinginData('steven@mail.com','12345678')

  isAuthenticated = JSON.parse(localStorage.getItem('auth') || 'false');

  constructor(public router: Router) { 

  }

  authenticate(signinData: SinginData): boolean{
    if(this.checkCredentials(signinData)){
      this.isAuthenticated = true;
      localStorage.setItem('auth', 'true')
      this.router.navigate(['home']);
      return true;
    }
    else{
      this.isAuthenticated = false;
      return false;
    }
  }

  private checkCredentials(signinData: SinginData): boolean{
    return this.checkEmail(signinData.getEmail()) && this.checkPassword(signinData.getPassword())
  }

  private checkEmail(email: string): boolean{
    return email === this.mockUser.getEmail()
  }
  private checkPassword(password: string): boolean{
    return password === this.mockUser.getPassword();
  }

  logout():void{
    localStorage.setItem('auth', 'false')
    this.isAuthenticated = false;
    this.router.navigate([''])
  }
}
