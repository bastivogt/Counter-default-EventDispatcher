"use strict";
import { Counter } from "./sevo/Counter.js";

console.log("app.js");

const counter = new Counter();

function counterChangeHandler(evt) {
  console.log(Counter.COUNTER_CHANGE, "count:", evt.detail.count);
}

counter.addEventListener(Counter.COUNTER_START, (evt) => {
  console.log(Counter.COUNTER_START, "count:", evt.detail.count);
});

/*counter.addEventListener(Counter.COUNTER_CHANGE, (evt) => {
  console.log(Counter.COUNTER_CHANGE, "count:", evt.detail.count);
});*/

counter.addEventListener(Counter.COUNTER_CHANGE, counterChangeHandler);

counter.addEventListener(Counter.COUNTER_FINISH, (evt) => {
  console.log(Counter.COUNTER_FINISH, "count:", evt.detail.count);
  console.log("evt:", evt);
});

//counter.removeEventListener(Counter.COUNTER_CHANGE, counterChangeHandler);

counter.run();
