import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home-app',
  template: `
<section class="mt-6">
  <div class="w-full home-intro">
    <div class="container flex justify-center items-center flex-col">
      <h2 class="text-black mb-3 font-semibold md:text-5xl xxs:text-xl">{{"home.plantCare" | translate}} </h2>
   <p class="md:w-[50%] xs:w-[60%] sm:[60%] text-[#665f5f] font-regular xs:text-sm md:text-base"> {{"home.intro" | translate}}</p>
</div>
</div>
</section>
  <app-home-categories></app-home-categories>
  <app-home-plants></app-home-plants>
<div class="container">
<h4 class="title text-[30px] font-bold text-[#070404ba] my-4">{{"home.experts" | translate}} </h4>
</div>

<div class="grid lg:grid-cols-4  xxs:grid-cols-1  xxs:gap-28 sm:grid-cols-2 sm:gap-20 gap-12 mt-6 px-12 pt-20 pb-10 bg-[#f2f2f4] md:text-5xl xxs:text-xl">
 <div class="bg-white flex justify-center items-center flex-col px-4  rounded h-full">
    <div class="image w-[100px] h-[100px] rounded-full mt-[-70px]">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60" class="h-full w-full rounded-full">
    </div>
    <div class="details">
      <h1 class="text-base text-black font-bold">Name</h1>
      <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sint molestiae! Ratione cumque repellat minima quisquam, necessitatibus recusandae </p>
    </div>
</div>
<div class="bg-white  flex justify-center items-center flex-col px-4 rounded h-full">
    <div class="image w-[100px] h-[100px] rounded-full mt-[-70px]">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60" class="h-full w-full rounded-full">
    </div>
    <div class="details">
      <h1 class="text-base text-black font-bold">Name</h1>
      <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sint molestiae! Ratione cumque repellat minima quisquam, necessitatibus recusandae </p>
    </div>
</div>
<div class="bg-white flex justify-center items-center flex-col px-4  rounded h-full">
    <div class="image w-[100px] h-[100px] rounded-full mt-[-70px]">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60" class="h-full w-full rounded-full">
    </div>
    <div class="details">
      <h1 class="text-base text-black font-bold">Name</h1>
      <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sint molestiae! Ratione cumque repellat minima quisquam, necessitatibus recusandae </p>
    </div>
</div>
<div class="bg-white  flex justify-center items-center flex-col px-4 rounded h-full">
    <div class="image w-[100px] h-[100px] rounded-full mt-[-70px]">
      <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60" class="h-full w-full rounded-full">
    </div>
    <div class="details">
      <h1 class="text-base text-black font-bold">Name</h1>
      <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, sint molestiae! Ratione cumque repellat minima quisquam, necessitatibus recusandae </p>
    </div>
</div>
</div>

<app-suggestions></app-suggestions>
  `,
  styles: [
    `.home-description{
      width:100%;
     background-color:yellow;
      margin: 50px auto;
    
 }
 .home-intro{
      width:100%;
      height:400px;
      margin: 0px auto;
      margin-bottom:20px;
      background-image: url('../../../../assets/images/intro.jpg');
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position:relative;
      display:flex;
 }
 .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Adjust the alpha value (0.5) to control the transparency */
}
 
 `
  ]
})
export class HomeAppComponent implements OnInit {
  ngOnInit(): void {
  
  }

}
