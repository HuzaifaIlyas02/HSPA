import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent implements OnInit {
  loggedinUser: string = '';

  constructor(private alertify: AlertifyService) {}

  ngOnInit() {}

  loggedin() {
    this.loggedinUser = localStorage.getItem('token') as string;
    return this.loggedinUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.alertify.success("You've been logged out");
  }
}
