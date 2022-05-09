import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  userForm: FormGroup;

  constructor(private http: HttpClient) {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      country: new FormControl(''),
      state: new FormControl(''),
      contact:new FormControl('',[Validators.minLength(10),Validators.required, Validators.pattern("^[0-9]*$")]),
      course: new FormControl('',[Validators.required])
    });
  }

  ngOnInit(): void {}
  postData() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
      this.http
        .post(
          'https://624d2af5d71863d7a8143760.mockapi.io/users',
          this.userForm.value
        )
        .subscribe((data) => {
          alert('Data Saved');
        });
    } else alert('Not Valid');
  }
}
