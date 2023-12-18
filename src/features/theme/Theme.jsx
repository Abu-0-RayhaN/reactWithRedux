import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTextColor } from "../counter/themeSlice";

const Theme = () => {
  const [color, setColor] = useState("white");
  const dispatch = useDispatch();
  const themcolor = useSelector((state) => state.theme.color);
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
        style={{ color: themcolor }}
      >
        Change Text Color
        <h1>{color}</h1>
      </button>
    </div>
  );
};

export default Theme;
