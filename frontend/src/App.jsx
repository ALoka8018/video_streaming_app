import React from "react";
import "./App.css";
import "tailwindcss";


const App = () => {
  let [counter, setCounter] = React.useState(1);

  if(counter<0){
    return <h1>Counter value should not be negative</h1>;

  }else if(counter>20){
    return <h1>Counter value should not be greater than 20</h1>;
  }
  const addValue = () => {
    setCounter(counter + 1);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <div className="container">
        <h1 className="text-10xl font-italic font-bold text-red-500 underline">chai or react</h1>
        <h1>counter value:{counter}</h1>
        <button onClick={addValue}>add value</button>
        <br />
        <button onClick={removeValue}>remove value</button>
      </div>
    </>
  );
};

export default App;
