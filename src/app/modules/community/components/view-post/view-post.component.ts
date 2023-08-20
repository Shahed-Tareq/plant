import { Component ,OnInit} from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Post } from '../../models/posts.model';


@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit  {
  public post!:Post;
  constructor( public ref: DynamicDialogRef,
    public config: DynamicDialogConfig){

  }
  ngOnInit(): void {
    this.post = this.config.data;
  }

  

  
}
