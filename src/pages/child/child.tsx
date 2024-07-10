import React, { useState, forwardRef, useImperativeHandle } from "react";

import { Button } from "../../components";
const App = forwardRef(
  (
    ref: React.Ref<{
      increment: () => void;
    }>,
  ) => {
    const [count, setCount] = useState(0);
    useImperativeHandle(ref, () => ({
      increment: () => setCount(count + 1),
    }));
    return (
      <div>
        <h1>Count: {count}</h1>
        <Button onClick={() => setCount(count + 1)}>Increment</Button>
      </div>
    );
  },
);
export default App;
