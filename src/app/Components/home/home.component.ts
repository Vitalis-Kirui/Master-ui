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
  selectedImage!: File;

  // Posts array
  allposts: any = [];

  constructor(
    private fbService: FormBuilder,
    private postservice: PostService
  ) {}

  ngOnInit() {
    // Form model
    this.postForm = this.fbService.group({
      caption: [''],
      image: [null],
    });

    // Fetching all the posts
    this.postservice.getallposts()
        .subscribe(data => {
          console.log(data);

          this.allposts = data.posts;

        },
        error =>{
          console.log(error);
        }
        )

  }

  // Handle file input change
  onFileSelected(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files[0]) {
      this.selectedImage = fileInput.files[0];
    }
  }

  // Submit form
  createPost() {
    const formData = new FormData();
    formData.append('caption', this.postForm.get('caption')!.value);
    formData.append('image', this.selectedImage);

    this.postservice.createpost(formData).subscribe(
      (response) => {
        console.log('Post created successfully:', response);
        // Reset form
        this.postForm.reset();
      },
      (error) => [console.log(error)]
    );
  }
}
