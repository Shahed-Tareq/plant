import { Component } from '@angular/core';

@Component({
  selector: 'app-view-planet',
  templateUrl: './view-planet.component.html',
  styleUrls: ['./view-planet.component.scss']
})
export class ViewPlanetComponent {
  editCategory(category: any) {
    // Handle edit logic here
    console.log('Edit:', category);
  }

  removeCategory(category: any) {
    // Handle remove logic here
    console.log('Remove:', category);
  }

 plants = [
    {
      id: 1,
      name: 'Sunflower',
      careDetails: 'Water regularly and provide full sun.',
      medicalBenefits: 'Rich in nutrients, aids digestion.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 1,
      season: 'Summer'
    },
    {
      id: 2,
      name: 'Lavender',
      careDetails: 'Plant in well-drained soil and give moderate water.',
      medicalBenefits: 'Relieves stress and promotes relaxation.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 2,
      season: 'Spring'
    },
    {
      id: 2,
      name: 'Lavender',
      careDetails: 'Plant in well-drained soil and give moderate water.',
      medicalBenefits: 'Relieves stress and promotes relaxation.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 2,
      season: 'Spring'
    },
    {
      id: 2,
      name: 'Lavender',
      careDetails: 'Plant in well-drained soil and give moderate water.',
      medicalBenefits: 'Relieves stress and promotes relaxation.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 2,
      season: 'Spring'
    },
    {
      id: 2,
      name: 'Lavender',
      careDetails: 'Plant in well-drained soil and give moderate water.',
      medicalBenefits: 'Relieves stress and promotes relaxation.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 2,
      season: 'Spring'
    },
    {
      id: 2,
      name: 'Lavender',
      careDetails: 'Plant in well-drained soil and give moderate water.',
      medicalBenefits: 'Relieves stress and promotes relaxation.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 2,
      season: 'Spring'
    },
    {
      id: 2,
      name: 'Lavender',
      careDetails: 'Plant in well-drained soil and give moderate water.',
      medicalBenefits: 'Relieves stress and promotes relaxation.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 2,
      season: 'Spring'
    },
    {
      id: 2,
      name: 'Lavender',
      careDetails: 'Plant in well-drained soil and give moderate water.',
      medicalBenefits: 'Relieves stress and promotes relaxation.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 2,
      season: 'Spring'
    },
    {
      id: 2,
      name: 'Lavender',
      careDetails: 'Plant in well-drained soil and give moderate water.',
      medicalBenefits: 'Relieves stress and promotes relaxation.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 2,
      season: 'Spring'
    },
    {
      id: 2,
      name: 'Lavender',
      careDetails: 'Plant in well-drained soil and give moderate water.',
      medicalBenefits: 'Relieves stress and promotes relaxation.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 2,
      season: 'Spring'
    },
    {
      id: 2,
      name: 'Lavender',
      careDetails: 'Plant in well-drained soil and give moderate water.',
      medicalBenefits: 'Relieves stress and promotes relaxation.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 2,
      season: 'Spring'
    },
    {
      id: 2,
      name: 'Lavender',
      careDetails: 'Plant in well-drained soil and give moderate water.',
      medicalBenefits: 'Relieves stress and promotes relaxation.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 2,
      season: 'Spring'
    },
    {
      id: 2,
      name: 'Lavender',
      careDetails: 'Plant in well-drained soil and give moderate water.',
      medicalBenefits: 'Relieves stress and promotes relaxation.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 2,
      season: 'Spring'
    },
    {
      id: 2,
      name: 'Lavender',
      careDetails: 'Plant in well-drained soil and give moderate water.',
      medicalBenefits: 'Relieves stress and promotes relaxation.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 2,
      season: 'Spring'
    },
    {
      id: 2,
      name: 'Lavender',
      careDetails: 'Plant in well-drained soil and give moderate water.',
      medicalBenefits: 'Relieves stress and promotes relaxation.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 2,
      season: 'Spring'
    },
    {
      id: 2,
      name: 'Lavender',
      careDetails: 'Plant in well-drained soil and give moderate water.',
      medicalBenefits: 'Relieves stress and promotes relaxation.',
      image: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1s.jpg',
      categoryId: 2,
      season: 'Spring'
    },
    // Add more plant objects here
  ];
  
}
