import "./styles.css";
import { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  const handleClick = (count) => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <h1>count is {count}</h1>
      <button
        onClick={() => {
          handleClick(count);
        }}
      >
        Add
      </button>
    </div>
  );
}
