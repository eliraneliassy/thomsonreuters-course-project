import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

    this.form = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl()
    });
  }

  login() {
    this.authService.setUser(this.form.value['email']);
    this.router.navigate(['feed']);
  }

}
