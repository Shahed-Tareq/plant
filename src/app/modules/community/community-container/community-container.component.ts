import { Component , OnInit } from '@angular/core';
import { Plant } from '../../shared/models/plants.model';
import { Post } from '../models/posts.model';


@Component({
  selector: 'app-community-container',
  templateUrl: './community-container.component.html',
  styleUrls: ['./community-container.component.scss']
})
export class CommunityContainerComponent implements OnInit{
posts!:Post[]
constructor(){}

  ngOnInit(): void {
    this.getAllPlants();
    this.getPosts()
    

  }
  plants:Plant[] = [];

// Get All Plants To show it in sidebar

 private getAllPlants(){
this.plants = [
  {_id: 1 , name: 'Orange'},
  {_id: 2 , name: 'Apple'},
  {_id: 3 , name: 'Banana'},
  {_id: 4 , name: 'Banana'},
  {_id: 5 , name: 'Orange'},
  {_id: 6 , name: 'Orange'},
  {_id: 7 , name: 'Orange'},
  {_id: 8 , name: 'Apple'},
  {_id: 9 , name: 'Orange'},
  {_id: 10 , name: 'Orange'},
  {_id: 12 , name: 'Orange'},
  {_id: 13, name: 'Orange'},
  {_id: 14 , name: 'Orange'},
  {_id: 15 , name: 'Orange'},
  {_id: 16 , name: 'Orange'},
  {_id: 17 , name: 'Orange'},
  {_id: 18 , name: 'Orange'},
  {_id: 19 , name: 'Orange'},
  {_id: 20 , name: 'Orange'},
  {_id: 21 , name: 'Orange'},
  {_id: 22 , name: 'Orange'},

]
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


}
