import { first } from 'rxjs/operators';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormGroupDirective } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  user: any;
  error: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }


  private onSubmit(): void {
    this.submitted = true;

    if (this.loginForm.invalid)
      return;

    this.loading = true;

    this.dataService.getUser(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(resp => {
        this.user = resp;
        console.log(resp);
        if (resp) {
          this.router.navigate(['profile']);
          localStorage.setItem('currentUser', JSON.stringify(resp));
        }
        else {
          this.loading = false;
          this.error = "Usuario ou senha errados";
          this.loginForm.reset();
          this.submitted = false;
        }
      },
      error => {
        this.loading = false;
        this.submitted = false;
      });
  }

}
