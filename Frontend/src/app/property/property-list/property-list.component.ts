import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css',
})
export class PropertyListComponent {
  properties: Array<any> = [
    {
      Id: 1,
      Name: 'Autrian',
      Type: 'House',
      Price: 12000,
      ImageUrl: 'assets/images/house_default.png',
    },
    {
      Id: 2,
      Name: 'Pakistan',
      Type: 'House',
      Price: 12000,
      ImageUrl: 'assets/images/house_default.png',
    },
    {
      Id: 3,
      Name: 'Huzaifa Ilyas',
      Type: 'House',
      Price: 12400,
      ImageUrl: 'assets/images/house_default.png',
    },
    {
      Id: 4,
      Name: 'Huzaifa Ilyas',
      Type: 'House',
      Price: 14600,
      ImageUrl: 'assets/images/house_default.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
