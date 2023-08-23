import NumberStore from "./numberStore";


const countViewModel = {

  get num() {
    return NumberStore.num.x;
  },

  increaseAction(num) {
    NumberStore.num.x = NumberStore.num.x + num;
    // NumberStore.num = {x: NumberStore.num.x + num};
  },

}

export { countViewModel };