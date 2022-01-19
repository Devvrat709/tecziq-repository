import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-one-by-one-response',
  templateUrl: './one-by-one-response.component.html',
  styleUrls: ['./one-by-one-response.component.css']
})
export class OneByOneResponseComponent implements OnInit {
  name = 'Angular';
  users : any;
  posts:any;
  comments:any;

  constructor(private http: HttpClient,
    private service : ServiceService) {}

  ngOnInit() {
    this.getAllData();
  }

  async getAllData() {
    this.users = await this.service.getUsers();
    this.posts = await this.service.getUserPosts(this.users[0].id);
    this.comments = await this.service.getPostComments(this.posts[0].id);

    console.log('One',this.users);
    console.log("Two",this.posts);
    console.log("Three",this.comments);
  }

}
