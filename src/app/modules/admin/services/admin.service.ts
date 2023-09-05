import { Injectable } from '@angular/core';
import { HttpRequestsService } from 'src/app/services/http-requests.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpService:HttpRequestsService) { }

  public addCategory(formData:any){
    return this.httpService.postRequest('Category/CreateCategory' , formData);
  }

  public addPlant(formData:any){
    return this.httpService.postRequest('Plant/CreatePlant' , formData)
  }

  public getCategoriesWithoutLang(){
    return this.httpService.getRequest('Category/GetCategoryWithOutlang')
  }
  public getPlantsWithoutLang(){
    return this.httpService.getRequest('Plant/GetAllPlantsWithOutLang')
  }

  public addUser(formData:any){
    return this.httpService.postRequest('user/CreateUser' , formData)
  }

  public updateCategory(formData:any){
    return this.httpService.putRequest('Category/UpdateCategoty' , formData)
  }
  public updatePlant(formData:any){
    return this.httpService.putRequest('Plant/UpdatePlant' , formData)
  }

public lockedUser(userId:any){
  return this.httpService.postRequest('user/LockUserAccount' , userId)
}
public unLockedUser(userId:any){
  return this.httpService.postRequest('user/UnlockUserAccount' , userId)
}
}
