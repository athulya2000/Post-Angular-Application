import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { RouterModule, RouterStateSnapshot, Routes, ROUTES, RoutesRecognized } from '@angular/router';

const myRoute:Routes=[
{
  path:"",
  component:AddPostComponent
}
]
  
  




@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
