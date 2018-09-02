import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  alertService: any;
  
  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      birthday: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      localization: ['', Validators.required],
      photo: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      cpf: ['', Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    // if (this.registerForm.invalid) {
    //   return;
    // }

    this.loading = true;

    this.dataService.signup(this.registerForm.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.router.navigate(['/profile']);
        },
        error => {
          this.loading = false;
          this.submitted = false;
        });
  }

}
