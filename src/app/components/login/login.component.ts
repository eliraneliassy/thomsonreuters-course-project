import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import * as fromApp from '../../store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private authService: AuthService, private router: Router,
    private store: Store<State>) { }

  ngOnInit() {

    this.form = new FormGroup({
      'email': new FormControl(null),
      'password': new FormControl()
    });

    // this.store.subscribe(console.log);
  }

  login() {
    this.store.dispatch(new fromApp.UserLogin(this.form.value['email']));
    // this.authService.setUser(this.form.value['email']);
    this.router.navigate(['feed']);
  }

}
