import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { getUserName } from 'src/app/store/app.selectors';
import { Observable, from } from 'rxjs';
import { UserLogout } from 'src/app/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$: Observable<string>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.user$ = this.store.pipe(select(getUserName));
  }

  logout() {
    this.store.dispatch(new UserLogout());
  }

}
