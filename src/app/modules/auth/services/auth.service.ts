import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestsService } from 'src/app/services/http-requests.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService: HttpRequestsService) { }

  public login(loginModel:any):Observable<any>{
return this.httpService.postRequest('' , loginModel)
  }
  public signUp(signupModel:any):Observable<any>{
return this.httpService.postRequest('' , signupModel)
  }
}
