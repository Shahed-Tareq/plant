import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AiService {

  constructor(private http:HttpClient) { }

  public showImageResult(file:any){
    return this.http.post('http://127.0.0.1:5000/predict' , file)
  }
}
