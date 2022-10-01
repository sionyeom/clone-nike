import React, { useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import store from "../../store";
import "./Main.scss";
const Main = observer(() => {
  // state
  const { arr, number } = store.countClass;

  // func
  const { increase, decrease } = store.countClass;

  useEffect(() => {
    console.log(toJS(arr[0]));
  }, [arr]);

  return (
    <div>
      <div className="ss">12</div>
      <div className="kr">34</div>
    </div>
  );
});

export default Main;
