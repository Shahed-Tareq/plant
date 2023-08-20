import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ButtonComponent } from '../shared/components/button/button.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupConfirmationComponent } from './components/signup-confirmation/signup-confirmation.component';



@NgModule({
  declarations: [
LoginComponent, SignupComponent , SignupConfirmationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,SharedModule,ButtonComponent
  ]
})
export class AuthModule { }
