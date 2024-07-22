import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from '../../model/ipropertybase';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form')
  addPropertyForm!: NgForm;
  @ViewChild('formTabs') formTabs!: TabsetComponent;

  // Will Come From masters
  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];

  propertyView: IPropertyBase = {
    Id: 0,
    SellRent: 0,
    Name: '',
    PType: '',
    Price: 0,
    FType: '',
    BHK: 0,
    BuiltArea: 0,
    City: '',
    RTM: 0,
  };

  constructor(private router: Router) {}

  ngOnInit() {}

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log('Congrats, form submitted!');
    // console.log(Form);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }
}
