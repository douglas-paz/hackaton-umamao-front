import { DataService } from './../../services/data.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/User.model';
import { MatMenuTrigger } from '@angular/material';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // @ViewChild(MatMenuTrigger) trigger: trigger;
  mode = new FormControl('over');
  user: User;
  showMenu = false;
  changingName = false;
  nameForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.nameForm = this.formBuilder.group({
      name: ['', Validators.required]
    });
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

  get f() { return this.nameForm.controls; }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleChangeName() {
    this.changingName = !this.changingName;
  }

  private onSubmit(): void {
    this.submitted = true;

    if (this.nameForm.invalid)
      return;
  }

}