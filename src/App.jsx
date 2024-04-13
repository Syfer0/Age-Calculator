import { useState } from "react";
import AgeCalculator from "./age";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AgeCalculator />
    </>
  );
}

export default App;
