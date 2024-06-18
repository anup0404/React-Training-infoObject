import React, { useRef, useState } from "react";

const StopWatch = () => {
  const [time, setTime] = useState<number >(Date.now());
  const[now,setNow]=useState<number>(Date.now());
  const intervalRef = useRef<number | null>(null);


  function handleStart() {
  
    if (intervalRef.current != null) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);

  }
  function handleStop() {
    if (intervalRef.current != null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }
  let  timeInterval;
  if(now!=null && time!=null){
   timeInterval=(now-time)/1000;
  }

  return (
    <>
      <div>
        <h2>StopWatch : {timeInterval?.toFixed(3)}</h2>
      </div>

      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
      </div>
    </>
  );
};

export default StopWatch;
