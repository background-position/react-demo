import React, { useState, useEffect, useRef } from "react";
import type { ChangeEvent } from "react";

import { Button } from "../../components";
import "./style.css";
const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const launch = () => {};

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      console.log("canvas", canvas);
    }
  }, []);
  return (
    <div>
      <canvas id="canvas" width="800" height="800" ref={canvasRef}></canvas>
      <div>
        <Button onClick={launch}>launch</Button>
      </div>
    </div>
  );
};
export default App;
