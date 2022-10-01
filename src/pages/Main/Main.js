import React, { useEffect } from "react";
import { toJS } from "mobx";
import { observer } from "mobx-react";
import store from "../../store";
import "./Main.scss";
// header
import Navigation from "../../components/Navigation/Navigation";

const Main = observer(() => {
  // state
  const { arr, number } = store.countClass;

  // func
  const { increase, decrease } = store.countClass;

  useEffect(() => {
    console.log(toJS(arr[0]));
  }, [arr]);

  return <Navigation />;
});

export default Main;
