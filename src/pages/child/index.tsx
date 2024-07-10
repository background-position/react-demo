import React, { useRef } from "react";
import Child from "./child";
import { Button } from "../../components";
const App = () => {
  const childRef = useRef<{
    increment: () => void;
  }>(null);

  return (
    <div>
      <Button
        onClick={() => {
          console.log("Button clicked");
          childRef.current?.increment();
        }}
      >
        Click me
      </Button>

      <br />

      <Child ref={childRef} />
    </div>
  );
};
export default App;
