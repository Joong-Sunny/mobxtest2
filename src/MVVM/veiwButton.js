import { observer, useObserver } from "mobx-react";
import { useEffect } from "react";
import numberStore from "./numberStore";
import { countViewModel } from "./viewModel";
import counter from "./classNumberSotre";


const Button = observer((setState) => {
  return (
    <div>
      <button onClick={() => countViewModel.increaseAction(4)}>NUMBER증가</button>
      <button onClick={() => countViewModel.increaseAction2(counter.num.numOfNum)}>NUMBER 직접 증가</button>
      <button onClick={() => countViewModel.addSocket()}>소켓추가</button>
      <button onClick={() => setState.setState(prev=>prev+1)}>state증가</button>
      <button onClick={() => countViewModel.changeSocket()}>소켓변경</button>

    </div>
  );
})

export default Button;
