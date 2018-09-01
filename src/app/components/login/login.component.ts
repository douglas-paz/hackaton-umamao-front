import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.loginForm.invalid)
      return;

    this.loading = true;
    /* TODO */
    // this.dataService.login(this.f.username.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe(resp => {
    //     this.user = resp;
    //     this.router.navigate(['/']);
    //   },
    //   error => {
    //     this.alertService.error(error);
    //     this.loading = false;
    //   });
  }

}
