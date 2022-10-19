import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/theme";

const ChangeColor = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)}></input>
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        CHANGE COLOR
      </button>
    </div>
  );
};

export default ChangeColor;
