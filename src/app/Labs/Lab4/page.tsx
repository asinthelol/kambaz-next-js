'use client';

import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import EventObject from "./EventObject";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import DateStateVariable from './DateStateVariable';
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import ReduxExample from "./ReduxExamples/page";

export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }

  return (
    <div id="wd-lab4">
      <h3>Lab 4</h3>
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <EventObject />
      <Counter />
      <BooleanStateVariables />
      <StringStateVariables />
      <DateStateVariable />
      <ObjectStateVariable />
      <ArrayStateVariable />
      <ParentStateComponent />
      <ReduxExample />
    </div>
  )
}