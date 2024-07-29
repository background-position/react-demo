import React, { useState, useEffect, useRef } from "react";
import { LoadImage } from "./load-image";
const App = () => {
  const ref = useRef(null);
  const [state, setState] = useState<any>(null);
  useEffect(() => {
    if (ref.current && !state) {
      let img = new LoadImage(ref.current);
      setState(img);
    }
  }, []);
  return (
    <div>
      <div className="flex flex-wrap w-[300px] h-[300px]" ref={ref}></div>
    </div>
  );
};
export default App;
