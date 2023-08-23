import { observer, useObserver } from "mobx-react";
import { useEffect } from "react";
import numberStore from "./numberStore";
import Button from "./veiwButton";

const Count = observer(() => {
  // console.log(numberStore.num);
  return (
    <div>
      <p> 숫자: {JSON.stringify(numberStore.num)}</p>
      <p> 숫자: {numberStore.num.x}</p>
      <Button/>
    </div>
  );
});

export default Count;
