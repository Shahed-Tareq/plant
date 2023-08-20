export interface Post{
_id:number,
title:string,
details:string,
comments:Comment[],
username:string,
image:string,
liked:boolean

}
export interface Comment{
    _id:number,
    comment:string,
    postId:number,
    username:string,
    image:string
}