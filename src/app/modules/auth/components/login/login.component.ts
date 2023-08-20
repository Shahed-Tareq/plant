import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  public submitted:boolean = false;

  loginForm = new FormGroup ({
    email: new FormControl('' , Validators.required),
    password: new FormControl('' , Validators.required)
  })

  public login(){
    this.submitted = true;
    if(this.loginForm.valid){
      this.submitted = false;
      console.log(this.loginForm.value)
    } else{

    }
  }

}
