import { useState } from "react";
import TOdoApp from "./TodoApp";
import Todoreset from "./Todoreset";
import "./App.css";
import Newtodoapp from "./Newtodoapp";
import TodoPractice from "./TodoPractice";
import Lifemethodfirst from "./Lifemethodfirst";
import React from "react";
function App() {
  const [name, setName] = React.useState("anshu");
  return (
    <>
      <div>
        {/* <TOdoApp />  */}
        {/* <Todoreset /> */}
        <Newtodoapp />
        {/* <TodoPractice /> */}
        {/* <Lifemethodfirst name={name} />
        <button onClick={() => setName("pandey")}>update</button> */}
      </div>
    </>
  );
}

export default App;
