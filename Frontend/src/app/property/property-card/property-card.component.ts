import { Component, Input } from '@angular/core';
import { IPropertyBase } from '../../model/ipropertybase';

@Component({
  selector: 'app-property-card',
  templateUrl: 'property-card.component.html',
  styleUrls: ['property-card.component.css'],
})
export class PropertyCardComponent {
  // will fetch data from APIs
  @Input() property!: IPropertyBase;
  @Input() hideIcons!: boolean;
}
