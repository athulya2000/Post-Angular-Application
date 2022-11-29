import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-allposts',
  templateUrl: './view-allposts.component.html',
  styleUrls: ['./view-allposts.component.css']
})
export class ViewAllpostsComponent {
  constructor(private api:ApiService)
  {
    api.fetchPost().subscribe(
      (response)=>{
        this.data=response
      }
    )
  }
data:any=[]
}
  