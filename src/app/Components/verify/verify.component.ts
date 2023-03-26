import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  // Form variables
  phonenumberForm!:FormGroup;
  emailForm!:FormGroup;

  constructor( private fbService: FormBuilder) { }

  ngOnInit() {

    // Phone number form model
    this.phonenumberForm = this.fbService.group({
      phonenumber:[""]
    })

    // Email form model
    this.emailForm = this.fbService.group({
      email:[""]
    })

  }

  // Verify phone number function
  verifyPhonenumber(){

    console.log(this.phonenumberForm.value);

  }

  // Verify email function
  verifyEmail(){

    console.log(this.emailForm.value);

  }

}
