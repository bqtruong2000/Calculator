import { state } from '@angular/animations';
import { createReducer, on } from '@ngrx/store';
import { Counter } from 'src/models/counter.model';
import * as CounterAction from '../actions/counter.action';

const initialState: Counter = { total: 0, currentNumber: 0, previousNumber: 0 };

export const counterReducer = createReducer(
  initialState,
  //   on(CounterAction.increase, (state) => ({ count: state.count + 1 })),
  //   on(CounterAction.decrease, (state) => ({ count: state.count - 1 })),
  //   on(CounterAction.reset, (state) => ({ count: 0 })),
  on(CounterAction.number_1, (state) => ({
    currentNumber: 1,
    previousNumber: state.previousNumber + state.currentNumber,
    total: state.currentNumber + state.previousNumber,
  })),
  on(CounterAction.number_2, (state) => ({
    currentNumber: 2,
    previousNumber: state.previousNumber + state.currentNumber,
    total: state.currentNumber + state.previousNumber,
  })),
  on(CounterAction.number_3, (state) => ({
    currentNumber: 3,
    previousNumber: state.previousNumber + state.currentNumber,
    total: state.currentNumber + state.previousNumber,
  })),
  on(CounterAction.number_4, (state) => ({
    currentNumber: 4,
    previousNumber: state.previousNumber + state.currentNumber,
    total: state.currentNumber + state.previousNumber,
  })),
  on(CounterAction.number_5, (state) => ({
    currentNumber: 5,
    previousNumber: state.previousNumber + state.currentNumber,
    total: state.currentNumber + state.previousNumber,
  })),
  on(CounterAction.number_6, (state) => ({
    currentNumber: 6,
    previousNumber: state.previousNumber + state.currentNumber,
    total: state.currentNumber + state.previousNumber,
  })),
  on(CounterAction.number_7, (state) => ({
    currentNumber: 7,
    previousNumber: state.previousNumber + state.currentNumber,
    total: state.currentNumber + state.previousNumber,
  })),
  on(CounterAction.number_8, (state) => ({
    currentNumber: 8,
    previousNumber: state.previousNumber + state.currentNumber,
    total: state.currentNumber + state.previousNumber,
  })),
  on(CounterAction.number_9, (state) => ({
    currentNumber: 9,
    previousNumber: state.previousNumber + state.currentNumber,
    total: state.currentNumber + state.previousNumber,
  })),
  on(CounterAction.number_0, (state) => ({
    currentNumber: 0,
    previousNumber: state.previousNumber + state.currentNumber,
    total: state.currentNumber + state.previousNumber,
  }))
);
