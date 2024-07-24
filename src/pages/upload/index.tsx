import { useState, useEffect, useRef } from "react";
import { Button } from "../../components";
import type { DragEvent } from "react";
import { createFileInput } from "./utils";
const App = () => {
  const fileDropRef = useRef(null);
  const onDrag = (e: DragEvent) => {
    e.preventDefault();
    console.log("drag");
  };
  const onDragEnd = (e: DragEvent) => {
    e.preventDefault();
    console.log("drag end");
  };
  const uploadFile = () => {
    const input = createFileInput();
    input.click();
  };
  return (
    <>
      <div ref={fileDropRef} onDrag={onDrag} onDragEnd={onDragEnd}>
        drag and drop
      </div>
      <div>
        <Button onClick={uploadFile}>Button</Button>
      </div>
      <div></div>
    </>
  );
};

export default App;
