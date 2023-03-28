import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http : HttpClient) { }

  // Creating a post request
  createpost(post : any) : Observable<any> {
    return this.http.post<any>(environment.newpost, post);
  }

}
