import { Component, Input } from '@angular/core';
import { Post } from '../../models/posts.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ViewPostComponent } from '../view-post/view-post.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [DialogService]
})
export class PostComponent {

  @Input() public post !: Post;
  public showAddCommentSection:boolean = false;
  public ref: DynamicDialogRef | undefined;
  private selectedPost!:Post
  @Input()short:boolean = true;
  
  constructor(public dialogService: DialogService){}

  
  commentClicked(){
    this.showAddCommentSection = !this.showAddCommentSection;
  }

  viewPost(post:Post) {
    this.ref = this.dialogService.open(ViewPostComponent, {
        header: 'Post Details',
        width: '50%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        data:post,
        styleClass:"post-popup"
    });

    this.ref.onClose.subscribe((post: Post) => {
       
    });
}

ngOnDestroy() {
    if (this.ref) {
        this.ref.close();
    }
}
}
