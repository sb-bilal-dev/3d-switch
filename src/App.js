import { useState } from "react";
import "./styles.css";

export default function Switch() {
  const [val, setVal] = useState();

  return (
    <div className="Switch" onClick={() => setVal(!val)}>
      <input type="checkbox" checked={val} onChange={(e) => setVal(!val)} />
      <div
        className={`Switch_innerBox Switch_innerBox--on ${
          !val ? "Switch_innerBox--removed" : ""
        }`}
      />
      <div
        className={`Switch_innerBox Switch_innerBox--off ${
          val ? "Switch_innerBox--removed" : ""
        }`}
      />
      <div className={`Switch_slide ${val ? "Switch_slide--switched" : ""}`}>
        <div className="Switch_slide_pinch" />
        <div className="Switch_slide_pinch" />
      </div>
    </div>
  );
}
