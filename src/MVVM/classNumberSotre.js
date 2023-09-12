import { makeAutoObservable, observable } from "mobx";

// Sheet.js를 따라 만듬
class Counter {
  num;
  nodes;

  constructor({num}) {
    this.num = num;
    this.nodes = [];
    makeAutoObservable(this);
  }

  setNumber(number) {
    this.num.numOfNum.numOfNumOfNum = number;
  }
}

export class Socket {
  socket;
  constructor(socket) {
    this.socket = socket;
  }
}
//
//
const counter = new Counter({num: {numOfNum : {numOfNumOfNum: 0}}});
const socket1 = new Socket(1);
const socket2 = new Socket(2);

counter.nodes.push(socket1);
counter.nodes.push(socket2);

export default counter;