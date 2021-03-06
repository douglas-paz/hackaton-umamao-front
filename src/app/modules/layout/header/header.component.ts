import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  menu: Object;
  menuNormal: Object;
  showMenu = false;
  darkModeActive = false;
  user: any;

  ngOnInit() {
    this.auth();
    this.menu = [
      {
        link: '',
        name: 'Home'
      },
      {
        link: 'about',
        name: 'About'
      }
    ];
    this.menuNormal = [
        {
          link: '',
          name: 'Home'
        },
        {
          link: 'about',
          name: 'About'
        },
        {
          link: 'login',
          name: 'Login'
        },
        {
          link: 'signup',
          name: 'Sign Up'
        }
      ];
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.auth();
  }

  modeToggleSwitch() {
    this.darkModeActive = !this.darkModeActive;
  }

  logout() {
    // this.dataService.logout()
    //   .pipe(first())
    //   .subscribe(resp => {
    //     this.user = resp;
    //   },
    //   error => {
    //     this.alertService.error(error);
    //   });
  }

  auth() {
    // this.dataService.auth()
    //   .pipe(first())
    //   .subscribe(resp => {
    //     this.user = resp;
    //     this.alertService.success(this.user);
    //   },
    //   error => {
    //     this.alertService.error(error);
    //   });
  }

}
