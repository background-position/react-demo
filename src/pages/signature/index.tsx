import React, { useState, useEffect, useRef } from "react";
import type { ChangeEvent } from "react";
import Signature from "./utils";
import { Button } from "../../components";
import "./style.css";
const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState("#000000");
  const [signature, setSignature] = useState<any>(null);
  const colorChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  const clear = () => {
    signature.claer();
  };
  const save = () => {
    let res = signature.toImage();
    console.log(res);
  };
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const s = new Signature(canvas);
      setSignature(s);
    }
  }, [color]);
  return (
    <div>
      <input type="color" onChange={colorChange} />
      <h1>Color: {color}</h1>
      <canvas id="canvas" width="800" height="800" ref={canvasRef}></canvas>
      <div>
        <Button onClick={clear}>Clear</Button>
        <Button onClick={save}>Save</Button>
      </div>
    </div>
  );
};
export default App;
