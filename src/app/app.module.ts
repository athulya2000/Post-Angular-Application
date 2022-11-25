import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { RouterModule, RouterStateSnapshot, Routes, ROUTES, RoutesRecognized } from '@angular/router';
import { ViewAllpostsComponent } from './view-allposts/view-allposts.component';

const myRoute:Routes=[
{
  path:"",
  component:AddPostComponent
},
{
  path:"view",
  component:ViewAllpostsComponent
}
]
  
  




@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    ViewAllpostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
