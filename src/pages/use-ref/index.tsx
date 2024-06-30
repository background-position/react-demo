import React, { useRef, forwardRef } from "react";
import { Button } from "../../components";}
import type { FC } from "react";}
interface IPageProps { }
const App: FC<IPageProps> = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} />
      <Button onClick={handleClick}>Focus</Button>
    </div>
  );
};
export default App;
