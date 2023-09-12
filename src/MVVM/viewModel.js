import NumberStore from "./numberStore";
import counter from "./classNumberSotre";
import {Socket} from "./classNumberSotre";

const countViewModel = {

  get num() {
    return NumberStore.num.x;
  },

  increaseAction(num) {
    // NumberStore.num.x = NumberStore.num.x + num;
    // NumberStore.num = {x: NumberStore.num.x + num};
    // counter.setNumber(counter.num.numOfNum.numOfNumOfNum +num);
    counter.num.numOfNum.numOfNumOfNum += num;
  },

  increaseAction2(num) {
    num.numOfNumOfNum += 2
  },

  addSocket() {
    counter.nodes.push(new Socket(5));
    console.log(counter.nodes)
  },

  changeSocket(){
    counter.nodes[0].socket = 10;
  }
}

export { countViewModel };