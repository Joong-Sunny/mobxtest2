import { observer, useObserver } from "mobx-react";
import { useEffect } from "react";
import numberStore from "./numberStore";
import { countViewModel } from "./viewModel";


const Button = observer(() => {
  return (
    <div>
      <button onClick={() => countViewModel.increaseAction(4)}>NUMBER증가</button>
    </div>
  );
})

export default Button;
