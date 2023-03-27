import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  // Form variables
  registerForm!: FormGroup;

  constructor(
    private router: Router,
    private fbService: FormBuilder,
    private userservice: UserService
  ) {}

  // Go to login page
  gotologin() {
    this.router.navigate(['login']);
  }

  ngOnInit() {
    // Form model
    this.registerForm = this.fbService.group({
      names: [''],
      username: [''],
      email: [''],
      phonenumber: [''],
      password: [''],
      confirmpassword: [''],
      subscribe: [''],
    });
  }

  // Register user function
  registerUser() {
    const user = this.registerForm.value;

    console.log(user);

    this.userservice.register(user)
        .subscribe(data =>{
          console.log(data);
        },
        error =>{
          console.log(error.message);
        });

  }
}
