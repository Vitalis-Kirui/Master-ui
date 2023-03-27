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
  login(userlogins: any) {
    return this.http.post<any>(environment.login, userlogins);
  };
}
