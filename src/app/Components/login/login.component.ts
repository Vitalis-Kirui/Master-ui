import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Form variables
  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private fbService: FormBuilder,
    private userservice: UserService
  ) {}

  // Go to register page
  gotoregister() {
    this.router.navigate(['register']);
  }

  ngOnInit() {
    // Login form model
    this.loginForm = this.fbService.group({
      username: [''],
      password: [''],
    });
  }

  // Login function
  loginUser() {
    const userlogins = this.loginForm.value;

    this.userservice.login(userlogins).subscribe(
      (data) => {
        console.log(data);

        // Setting token in LocalStorage
        localStorage.setItem('token',data.token);

        // Redirecting to home page
        this.router.navigate(['']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
