import { Component } from '@angular/core';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
 userId=""
 id=""
 titile=""
 body=""

 readValues=()=>
 {
  let data:any={"userId":this.userId,"id":this.id,"titile":this.titile,"body":this.body}
  console.log(data)
 }
}
