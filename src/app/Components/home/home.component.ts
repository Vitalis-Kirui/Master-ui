import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Form Variables
  postForm!: FormGroup;

  constructor(private fbService: FormBuilder) { }

  ngOnInit() {

    // Form model
    this.postForm = this.fbService.group({
      post: [""],
      image:[""]
    })

  }

  // Submit
  createPost(){

    console.log(this.postForm.value);

  }

}
