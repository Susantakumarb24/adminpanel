import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view-component',
  templateUrl: './product-view-component.component.html',
  styleUrls: ['./product-view-component.component.css']
})
export class ProductViewComponentComponent implements OnInit {
  currentProductName="";
  constructor(private activatedRoute:ActivatedRoute) {
    this.currentProductName=this.activatedRoute.snapshot.params['id']
   }

  ngOnInit(): void {
  }
  

}
