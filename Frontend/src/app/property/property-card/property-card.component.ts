import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css'],
})
export class PropertyCardComponent {
  // will fetch data from APIs
  Property: any = {
    Id: 1,
    Name: 'Huzaifa Ilyas',
    Type: 'House',
    Price: 12000,
    ImageUrl: 'assets/images/house_default.png',
  };
}
