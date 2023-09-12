import "./App.css";
import Count from "./MVVM/view";
import { useEffect } from "react";
import { autorun, reaction, Reaction } from "mobx";
import NumberStore from "./MVVM/numberStore";
import { observer } from "mobx-react";
import counter from "./MVVM/classNumberSotre";

const App = observer(() => {

  useEffect(() => {
    const disposer = reaction(

      () => JSON.stringify(NumberStore.num),

      (newValue, prevValue) => {
        console.log("내가 원하던 사이드이펙트 발동!");
        console.log(`값은 ${prevValue} 에서 ${newValue}가 됨`);
      }
    );

    // 컴포넌트가 언마운트될 때 해지
    return () => {
      disposer();
    };
  }, []);


  return <Count counter={counter}/>;
});

export default App;
