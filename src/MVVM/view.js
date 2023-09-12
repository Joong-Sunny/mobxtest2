import { observer, useObserver } from "mobx-react";
import { useEffect, useState } from "react";
import numberStore from "./numberStore";
import Button from "./veiwButton";
// import counter from "./classNumberSotre";


const Count = ({ counter }) => {
  // console.log(numberStore.num);
  const [state, setState] = useState(0);

  return (
    <div>
      <p> 숫자: {JSON.stringify(counter.num)}</p>
      <p> 숫자: {state}는 {counter.nodes[state]  ? counter.nodes[state].socket : "없음"}</p>
      {/*<p> 숫자: {counter.num}</p>*/}
      <Button setState={setState}/>
    </div>
  );
};

export default observer(Count);
