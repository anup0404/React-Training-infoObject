import React, { useState } from "react";

const initialShape = [
  { id: 1, type: "circle", x: 50, y: 100 },
  { id: 2, type: "Square", x: 150, y: 100 },
  { id: 3, type: "circle", x: 250, y: 100 },
];

const TransformingArray = () => {
  const [shape, setShape] = useState(initialShape);

  function handleClick() {
    const nextShape = shape.map((shape) => {
      if (shape.type === "Square") return shape;
      else {
        return {
          ...shape,
          y: shape.y + 50,
        };
      }
    });
    setShape(nextShape);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        background: "black",
        padding: "10px",
        position: "relative",
      }}
    >
      <button onClick={handleClick}>Move circle down</button>
      {shape.map((shape) => (
        <div
          key={shape.id}
          style={{
            backgroundColor: "purple",
            width: 20,
            height: 20,
            position: "absolute",
            borderRadius: shape.type === "circle" ? "50%" : "",
            left: shape.x,
            top: shape.y,
          }}
        ></div>
      ))}
    </div>
  );
};

export default TransformingArray;
