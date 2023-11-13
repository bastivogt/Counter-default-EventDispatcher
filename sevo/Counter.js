"use strict";

export class Counter extends EventTarget {
  static get COUNTER_START() {
    return "counterStart";
  }

  static get COUNTER_CHANGE() {
    return "counterChange";
  }

  static get COUNTER_FINISH() {
    return "counterFinish";
  }
  constructor(start = 0, stop = 10, step = 1) {
    super();
    this._start = start;
    this._stop = stop;
    this._step = step;
    this._count = this.start;
  }

  run() {
    this._count = this._start;
    this.dispatchEvent(
      new CustomEvent(Counter.COUNTER_START, {
        detail: { count: this._count },
      })
    );

    for (; this._count < this._stop; this._count += this._step) {
      this.dispatchEvent(
        new CustomEvent(Counter.COUNTER_CHANGE, {
          detail: { count: this._count },
        })
      );
    }

    this.dispatchEvent(
      new CustomEvent(Counter.COUNTER_FINISH, {
        detail: { count: this._count },
      })
    );
  }
}
