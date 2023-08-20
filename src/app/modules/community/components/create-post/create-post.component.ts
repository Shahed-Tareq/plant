import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  constructor(private router:Router){

  }


  public addPost():void{
    this.router.navigate(['community/myPost'])
  }
}
