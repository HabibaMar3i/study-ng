import { computed, signal } from '@angular/core';

export interface CounterState {
  count: number;
}

export class CounterStore {
  private readonly _state = signal<CounterState>({ count: 0 });

  readonly count = computed(() => this._state().count);
  readonly double = computed(() => this._state().count * 2);

  increment() {
    this._state.update((state) => ({ count: state.count + 1 }));
  }

  decrement() {
    this._state.update((state) => ({ count: state.count - 1 }));
  }

  reset() {
    this._state.set({ count: 0 });
  }
}
