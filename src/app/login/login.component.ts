import { flatten } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SinginData } from '../model/singinData';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isFormInvalid = false;
  areCredentialsInvalid = false;
  
  constructor(private authenticationService: AuthenticationService){}
  
  
  
  onSubmit(singinForm: NgForm){
    console.log(singinForm.value);

    if(!singinForm.valid){
      this.isFormInvalid = true;
      this.areCredentialsInvalid = false;
      return;
    }

    this.checkCredentials(singinForm);
   
  }

  checkCredentials(singinForm: NgForm){
    const singinData = new SinginData(singinForm.value.email, singinForm.value.password)
    if(!this.authenticationService.authenticate(singinData)){
      this.isFormInvalid = false;
      this.areCredentialsInvalid = true;
    }
  }

  ngOnInit(): void {
  }

}
