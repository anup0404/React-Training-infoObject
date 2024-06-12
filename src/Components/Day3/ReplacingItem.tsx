import { useState } from "react";

const intitialCounter = [0, 0, 0];
const ReplacingItem = () => {
  const [counter, setCounter] = useState<number[]>(intitialCounter);

  function handleIncrementClick(index: number) {
    const nextCounter = counter.map((count: number, idx: number) => {
      if (idx === index) return count + 1;
      else return count;
    });
    setCounter(nextCounter);
  }
  return (
    <>
      <ul>
        {counter.map((count: number, idx: number) => (
          <li key={idx}>
            {count}
            <button onClick={() => handleIncrementClick(idx)}>+1</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ReplacingItem;
