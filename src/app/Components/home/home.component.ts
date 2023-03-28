import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Form Variables
  postForm!: FormGroup;

  constructor(
    private fbService: FormBuilder,
    private postservice: PostService
  ) {}

  ngOnInit() {
    // Form model
    this.postForm = this.fbService.group({
      caption: [''],
      image: [''],
    });
  }

  // Submit
  createPost() {

    // Create a FormData object and add the form data
  const formData = new FormData();
  formData.append('caption', this.postForm.get('caption')?.value);
  formData.append('image', this.postForm.get('image')?.value);

  // Call the createPost() method in the PostService to send the post data to the server
  this.postservice.createpost(formData).subscribe(
    (response) => {
      console.log('Post created successfully:', response);
      // Reset the form after the post is created
      this.postForm.reset();
    },
    (error) => {
      console.error('Error creating post:', error);
    }
  );

  }
}
