import { observable } from "mobx";


const NumberStore = observable({

    num : 0,
    nums : [],
    number_length :0,

    increaseAction(num) {

        this.num = this.num + num;
    },

    decreaseAction(num) {

        this.num = this.num - num;
    },

    stackNum(num){
        const temps=this.nums;
        temps.push(num);
        this.nums.replace(temps);
        //this.nums.push(num);
        console.log("dss");
    }
});

export default NumberStore;