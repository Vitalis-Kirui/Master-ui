import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public service : UserService) { }

  ngOnInit(): void {
  }

  // Logout user
  logout(){
    localStorage.removeItem('token');
    window.location.reload();
  }

}
