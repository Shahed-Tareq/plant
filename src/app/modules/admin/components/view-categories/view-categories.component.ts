import { Component } from '@angular/core';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.scss']
})
export class ViewCategoriesComponent {
  categories = [
    { name: 'Category 1', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    { name: 'Category 2', image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg' },
    // Add more category data here
  ];

  editCategory(category: any) {
    // Handle edit logic here
    console.log('Edit:', category);
  }

  removeCategory(category: any) {
    // Handle remove logic here
    console.log('Remove:', category);
  }
}
