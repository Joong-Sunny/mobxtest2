import "./App.css";
import indexStore from "./indexStore";
import { useObserver } from "mobx-react";
import { useEffect } from "react";
import { autorun, reaction } from "mobx";
import NumberStore from "./numberStore";
import userStore from "./userStore";

const App = () => {
  //const { NumberStore, UserStore } = indexStore();

  const onClickIncrease = () => {
    NumberStore.increaseAction(3);
  };
  const onClickDecrease = () => {
    NumberStore.decreaseAction(2);
  };

  const onClickIncreaseUserStore = () => {
    userStore.increaseAction(3);
  };
  const onClickDecreaseUserStore = () => {
    userStore.decreaseAction(2);
  };

  const onClickStack = () => {
    NumberStore.stackNum(NumberStore.num);
  };
  const onClickStackUserStore = () => {
    userStore.stackNum(userStore.num);
  };
  // /*
  useEffect(() => {
    console.log("test");
  }, [userStore.num]);

  return useObserver(() => (
    <div>
      {/* <p>Number현재 값 : {NumberStore.num}</p> */}
      <p>User현재 값 : {userStore.num}</p>
      <button onClick={onClickIncrease}>NUMBER증가</button>
      <button onClick={onClickDecrease}>NUMBER감소</button>

      <button onClick={onClickIncreaseUserStore}>USER증가</button>
      <button onClick={onClickDecreaseUserStore}>USER증가감소</button>

      <button onClick={onClickStack}>NUMBER보관</button>
      <button onClick={onClickStackUserStore}>USER증가보관</button>
    </div>
  ));
};

export default App;
