import { useState } from "react";

const ExampleUseState = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  const subtract = () => {
    setCount((prev) => prev - 1);
  };

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <h2>ExampleUseState</h2>
      <div>
        <div>Count : {count}</div>
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
      </div>
    </div>
  );
};

export default ExampleUseState;
