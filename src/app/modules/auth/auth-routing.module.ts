import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupConfirmationComponent } from './components/signup-confirmation/signup-confirmation.component';

const routes: Routes = [
{path:'' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},
  {path:'confirm' , component:SignupConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
