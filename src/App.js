import "./App.css";
import Count from "./MVVM/view";
import { useEffect } from "react";
import { countViewModel } from "./MVVM/viewModel";
import { reaction } from "mobx";
import NumberStore from "./MVVM/numberStore";
import { observer } from "mobx-react";

const App = observer(() => {

  useEffect(() => {
    console.log("useEffect작동!");
    // console.log(countViewModel.num)
  }, [NumberStore.num]);


  return <Count/>;
});

export default App;
