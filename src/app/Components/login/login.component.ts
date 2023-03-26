import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  // Form variables
  loginForm!: FormGroup;

  constructor(private router: Router, private fbService: FormBuilder) {}

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
    console.log(this.loginForm.value);
  }
}
