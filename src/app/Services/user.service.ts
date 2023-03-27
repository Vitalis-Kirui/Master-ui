import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  // Register a user
  register(user: any) {
    return this.http.post<any>(environment.register, user);
  };

  // Login user
  login(user: any) : Observable<any> {
    return this.http.get<any>(environment.login, user);
  };
}