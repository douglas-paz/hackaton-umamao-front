import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitation',
  templateUrl: './solicitation.component.html',
  styleUrls: ['./solicitation.component.css']
})
export class SolicitationComponent implements OnInit {
  showMenu = false;
  popup = false;

  constructor() { }

  ngOnInit() {

  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  showPopUp() {
    this.popup = !this.popup;
  }
}
