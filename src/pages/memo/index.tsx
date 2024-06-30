import React, { useState, FC } from "react";
import { Button } from "../../components";

import "./index.css";
interface PageProps {}
const CHild = (props: { count: number }) => {
  return (
    <div>
      <h1>Count: {props.count}</h1>
      <h1>{Math.random()}</h1>
    </div>
  );
};
const Child2 = (props: { count: number }) => {
  return (
    <div>
      <h1>Count: {props.count}</h1>
      <h1>{Math.random()}</h1>
    </div>
  );
};

const MemoizedApp = React.memo(CHild);
const App: FC<PageProps> = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <Button onClick={() => setCount2((count2) => count2 + 1)}>
          count2 is {count2}
        </Button>
      </div>
      <p className="read-the-docs">
        click the button to see the difference between useMemo and memo
      </p>
      <MemoizedApp count={count} />
      <Child2 count={count2} />
    </>
  );
};
export default App;
