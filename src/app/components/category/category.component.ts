import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
 
  category1 = {
    categoryName: 'sa',
  };
  category2 = {
    categoryName: 'sas',
  };
  category3 = {
    categoryName: 'saa',
  };
  categories = [this.category1, this.category2, this.category3];
   constructor() {}
   ngOnInit(): void {}
}
