import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '../store/state/app.state';
import { AddUser, GetUsers } from '../store/actions/user.actions';
import { IUser } from '../models/user.interface';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
    id = '';
    name = '';
    cardNumber = '';
    cardType = '';
    $user = this.store.select(state => state.user);

  columnDefs = [
    { headerName: 'Make', field: 'make', sortable: true, filter: true },
    { headerName: 'Model', field: 'model', sortable: true, filter: true },
    { headerName: 'Price', field: 'price', sortable: true, filter: true}
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];

    constructor(private store: Store<IAppState>) { }

  ngOnInit() {

  }

  addUser() {
    const user: IUser = {
      id: +this.id,
      name: this.name,
      cardNumber: this.cardNumber,
      cardType: this.cardNumber
    };
    this.store.dispatch(new AddUser(user));
  }
}
