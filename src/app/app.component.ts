import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';
import { IUser } from './models/user.interface';
import { AddUser } from './store/actions/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ngrx-redux';

  users$ = this.store.select(state => state.user.users);

  maxid$ = this.store.select( state => {
      const user = state.user.users.reduce((res, item) => {
      if (item.id > res.id) { return item; }
      return res;
    });
      return user.id;
  });



  name: string;
  cardNumber: string;
  cardType: string;
  id: number;

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {

  }

  addUser() {
    if (!this.name || !this.cardNumber || !this.cardType) { return; }
    this.maxid$.subscribe(value => this.id = value + 1);
    const user: IUser = {
      id: this.id,
      name: this.name,
      cardNumber: this.cardNumber,
      cardType: this.cardNumber
    };
    this.store.dispatch(new AddUser(user));
    this.name = '';
    this.cardType = '';
    this.cardNumber = '';
  }


}
