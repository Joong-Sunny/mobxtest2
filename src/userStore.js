import { observable } from "mobx";

const userStore = observable({
  num: 0,
  nums: [],
  number_length: 0,

  increaseAction(num) {
    this.num = this.num + num;
  },

  decreaseAction(num) {
    this.num = this.num - num;
  },

  stackNum(num) {
    this.nums.push(num);
    console.log("dss");
  },
});

export default userStore;
