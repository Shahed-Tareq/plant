import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/posts.model';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { ViewPostComponent } from '../view-post/view-post.component';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.scss'],
  providers: [DialogService]
})
export class MypostComponent implements OnInit{
  posts!:Post[];
  public ref: DynamicDialogRef | undefined;
  constructor(public dialogService: DialogService){}
  ngOnInit(): void {
   this.getPosts()
  }



  getPosts(){
    this.posts =[
      {liked: true,title:'molestiae  animi consequuntu' , details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quas quidem tempora explicabo nemo minus molestiae praesentium animi consequuntur debitis aliquam illum, blanditiis' , _id:1 , username:'Shahed Tareq' , comments:[
        {postId:1 , _id:1 , comment:'this is very good' , username: 'Ali Mohammed' , image:''}
      ] , image: ''},
      {liked: true,title:'molestiae praesentium ' , details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quas quidem tempora explicabo nemo minus molestiae praesentium animi consequuntur debitis aliquam illum, blanditiis' , _id:2 , username:'moath Tareq' , comments:[
        {postId:2 , _id:1 , comment:'this is very good' , username: 'Ali Mohammed' , image:''},
        {postId:2 , _id:2 , comment:'you can test that' , username: 'Moath Mohammed' , image:''},
        {postId:2 , _id:3 , comment:'can you try this way' , username: 'Zeyad Tareq' , image: ''},
        {postId:2 , _id:4 , comment:'don\'t worry about this senario' , username: 'Ahmad Tareq' , image:''},
      ] , image: ''},
      {liked: false,title:'molestiae praesentium animi consequuntu praesentium animi consequuntu' , details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quas quidem tempora explicabo nemo minus molestiae praesentium animi consequuntur debitis aliquam illum, blanditiis' , _id:3 , username:'Ali Tareq' , comments:[
        {postId:3 , _id:1 , comment:'this is very good' , username: 'Ali Mohammed' , image:''},
        {postId:3 , _id:2 , comment:'you can test that' , username: 'Moath Mohammed' , image:''},
        {postId:3 , _id:3 , comment:'can you try this way' , username: 'Zeyad Tareq' , image: ''},
        {postId:3 , _id:4 , comment:'don\'t worry about this senario' , username: 'Ahmad Tareq' , image:''},
      ] , image: ''},
      {liked: false,title:'molestiae praesentium animi consequuntu' , details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quas quidem tempora explicabo nemo minus molestiae praesentium animi consequuntur debitis aliquam illum, blanditiis' , _id:4 , username:'Shahed mohamed' , comments:[
        {postId:4 , _id:1 , comment:'this is very good' , username: 'Ali Mohammed' , image:''},
        {postId:4 , _id:2 , comment:'you can test that' , username: 'Moath Mohammed' , image:''},
        {postId:4 , _id:3 , comment:'can you try this way' , username: 'Zeyad Tareq' , image: ''},
        {postId:4 , _id:4 , comment:'don\'t worry about this senario' , username: 'Ahmad Tareq' , image:''},
      ] , image: ''},
      {liked: true,title:'molestiae praesentium animi consequuntu' , details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quas quidem tempora explicabo nemo minus molestiae praesentium animi consequuntur debitis aliquam illum, blanditiis' , _id:5 , username:'Shahed Tareq' , comments:[
        {postId:5 , _id:1 , comment:'this is very good' , username: 'Ali Mohammed' , image:''},
        {postId:5 , _id:2 , comment:'you can test that' , username: 'Moath Mohammed' , image:''},
        {postId:5 , _id:3 , comment:'can you try this way' , username: 'Zeyad Tareq' , image: ''},
        {postId:5 , _id:4 , comment:'don\'t worry about this senario' , username: 'Ahmad Tareq' , image:''},
      ] , image: ''},
      {liked: true,title:'molestiae praesentium animi consequuntu' , details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quas quidem tempora explicabo nemo minus molestiae praesentium animi consequuntur debitis aliquam illum, blanditiis' , _id:6 , username:'Shahed Tareq' , comments:[
        {postId:6 , _id:1 , comment:'this is very good' , username: 'Ali Mohammed' , image:''},
        {postId:6 , _id:2 , comment:'you can test that' , username: 'Moath Mohammed' , image:''},
        {postId:6 , _id:3 , comment:'can you try this way' , username: 'Zeyad Tareq' , image: ''},
        {postId:6 , _id:4 , comment:'don\'t worry about this senario' , username: 'Ahmad Tareq' , image:''},
      ] , image: ''},
      {liked: false,title:'molestiae praesentium animi consequuntu' , details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quas quidem tempora explicabo nemo minus molestiae praesentium animi consequuntur debitis aliquam illum, blanditiis' , _id:7 , username:'Shahed Tareq' , comments:[
        {postId:7 , _id:1 , comment:'this is very good' , username: 'Ali Mohammed' , image:''},
        {postId:7 , _id:2 , comment:'you can test that' , username: 'Moath Mohammed' , image:''},
        {postId:7 , _id:3 , comment:'can you try this way' , username: 'Zeyad Tareq' , image: ''},
        {postId:7 , _id:4 , comment:'don\'t worry about this senario' , username: 'Ahmad Tareq' , image:''},
      ] , image: ''},
      {liked: false,title:'molestiae praesentium animi consequuntu' , details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quas quidem tempora explicabo nemo minus molestiae praesentium animi consequuntur debitis aliquam illum, blanditiis' , _id:8, username:'Shahed Tareq' , comments:[
        {postId:8 , _id:1 , comment:'this is very good' , username: 'Ali Mohammed' , image:''},
        {postId:8 , _id:2 , comment:'you can test that' , username: 'Moath Mohammed' , image:''},
        {postId:8 , _id:3 , comment:'can you try this way' , username: 'Zeyad Tareq' , image: ''},
        {postId:8 , _id:4 , comment:'don\'t worry about this senario' , username: 'Ahmad Tareq' , image:''},
      ] , image: ''},
      {liked: true,title:'molestiae praesentium animi consequuntu' , details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quas quidem tempora explicabo nemo minus molestiae praesentium animi consequuntur debitis aliquam illum, blanditiis' , _id:9 , username:'Shahed Tareq' , comments:[
        {postId:9 , _id:1 , comment:'this is very good' , username: 'Ali Mohammed' , image:''},
        {postId:9 , _id:2 , comment:'you can test that' , username: 'Moath Mohammed' , image:''},
        {postId:9 , _id:3 , comment:'can you try this way' , username: 'Zeyad Tareq' , image: ''},
        {postId:9 , _id:4 , comment:'don\'t worry about this senario' , username: 'Ahmad Tareq' , image:''},
      ] , image: ''},
      {liked: true,title:'molestiae praesentium animi consequuntu' , details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quas quidem tempora explicabo nemo minus molestiae praesentium animi consequuntur debitis aliquam illum, blanditiis' , _id:10 , username:'Shahed Tareq' , comments:[
        {postId:10 , _id:1 , comment:'this is very good' , username: 'Ali Mohammed' , image:''},
        {postId:10 , _id:2 , comment:'you can test that' , username: 'Moath Mohammed' , image:''},
        {postId:10 , _id:3 , comment:'can you try this way' , username: 'Zeyad Tareq' , image: ''},
        {postId:10 , _id:4 , comment:'don\'t worry about this senario' , username: 'Ahmad Tareq' , image:''},
      ] , image: ''},
      {liked: true,title:'molestiae praesentium animi consequuntu' , details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quas quidem tempora explicabo nemo minus molestiae praesentium animi consequuntur debitis aliquam illum, blanditiis' , _id:11 , username:'Shahed Tareq' , comments:[
        {postId:11 , _id:1 , comment:'this is very good' , username: 'Ali Mohammed' , image:''},
        {postId:11 , _id:2 , comment:'you can test that' , username: 'Moath Mohammed' , image:''},
        {postId:11 , _id:3 , comment:'can you try this way' , username: 'Zeyad Tareq' , image: ''},
        {postId:11 , _id:4 , comment:'don\'t worry about this senario' , username: 'Ahmad Tareq' , image:''},
      ] , image: ''},
      {liked: true,title:'molestiae praesentium animi consequuntu' , details: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem quas quidem tempora explicabo nemo minus molestiae praesentium animi consequuntur debitis aliquam illum, blanditiis' , _id:12 , username:'Shahed Tareq' , comments:[
        {postId:12 , _id:1 , comment:'this is very good' , username: 'Ali Mohammed' , image:''},
        {postId:12 , _id:2 , comment:'you can test that' , username: 'Moath Mohammed' , image:''},
        {postId:12 , _id:3 , comment:'can you try this way' , username: 'Zeyad Tareq' , image: ''},
        {postId:12 , _id:4 , comment:'don\'t worry about this senario' , username: 'Ahmad Tareq' , image:''},
      ] , image: ''},
    ]
  }

  viewPost(post:Post) {
    this.ref = this.dialogService.open(ViewPostComponent, {
        header: 'Post Details',
        width: '50%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        data:post,
        styleClass:'post-popup'
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
