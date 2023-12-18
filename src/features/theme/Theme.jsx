import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTextColor } from "../counter/themeSlice";

const Theme = () => {
  const [color, setColor] = useState("white");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        className="textbox"
        onChange={(e) => setColor(e.target.value)}
      />
      <button
        className="btn"
        onClick={() => {
          dispatch(changeTextColor(color));
        }}
      >
        Change Text Color
        <h1>{color}</h1>
      </button>
    </div>
  );
};

export default Theme;
