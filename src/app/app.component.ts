import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Counter } from 'src/models/counter.model';
import * as CounterAction from './actions/counter.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Calculator';

  // counter$: Observable<Counter>;

  // constructor(private store: Store<{ counter: Counter }>) {
  //   this.counter$ = store.select('counter');
  // }

  // increase() {
  //   this.store.dispatch(CounterAction.increase());
  // }
  // decrease() {
  //   this.store.dispatch(CounterAction.decrease());
  // }
  // reset() {
  //   this.store.dispatch(CounterAction.reset());
  // }

  counter$: Observable<Counter>;

  constructor(private store: Store<{ counter: Counter }>) {
    this.counter$ = store.select('counter');
  }

  increase() {
    this.store.dispatch(CounterAction.increase());
  }
  decrease() {
    this.store.dispatch(CounterAction.decrease());
  }
  reset() {
    this.store.dispatch(CounterAction.reset());
  }
  number_1() {
    this.store.dispatch(CounterAction.number_1());
  }
  number_2() {
    this.store.dispatch(CounterAction.number_2());
  }
  number_3() {
    this.store.dispatch(CounterAction.number_3());
  }
  number_4() {
    this.store.dispatch(CounterAction.number_4());
  }
  number_5() {
    this.store.dispatch(CounterAction.number_5());
  }
  number_6() {
    this.store.dispatch(CounterAction.number_6());
  }
  number_7() {
    this.store.dispatch(CounterAction.number_7());
  }
  number_8() {
    this.store.dispatch(CounterAction.number_8());
  }
  number_9() {
    this.store.dispatch(CounterAction.number_9());
  }
  number_0() {
    this.store.dispatch(CounterAction.number_0());
  }
  addition() {
    this.store.dispatch(CounterAction.addition());
  }
}
