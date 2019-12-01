import {Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'ngrx-redux';
  users$ = this.store.select((state) => state.user.users);

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {

  }


}
