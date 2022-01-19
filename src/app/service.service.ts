import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }
  
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .toPromise();
  }

  getUserPosts(userId:any) {
    return this.http.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .toPromise();
  }

  getPostComments(postId:any) {
    return this.http.get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).toPromise()
      
  }

}
