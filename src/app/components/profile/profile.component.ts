import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/User.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;
  showMenu = false;
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  toggleMenu() {
    console.log(this.showMenu);
    this.showMenu = !this.showMenu;
  }

}
