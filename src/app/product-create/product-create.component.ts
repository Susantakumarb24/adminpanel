import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css'],
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;

  constructor(private http: HttpClient) {
    this.productForm = new FormGroup({
      course: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      level: new FormControl('', Validators.required),
      location: new FormControl(''),
      startDate: new FormControl(''),
      fee: new FormControl(''),
    });
  }

  ngOnInit(): void {}
  postData() {
    if (this.productForm.valid) {
      console.log(this.productForm.value);
      this.http
        .post(
          'https://624d2af5d71863d7a8143760.mockapi.io/products',
          this.productForm.value
        )
        .subscribe((data) => {
          alert('Data Saved');
        });
    } else alert('Not Valid');
  }
}
