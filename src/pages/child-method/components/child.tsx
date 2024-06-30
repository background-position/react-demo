import React, { forwardRef, useImperativeHandle, useRef } from "react";
interface PageProps {
  count: number;
  setCount: (count: number) => void;
  children?: React.ReactNode;
}

const App = forwardRef(
  (
    props: PageProps,
    ref: React.Ref<{
      focus: () => void;
    }> | null,
  ) => {
    const { count, setCount, children } = props;
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setCount(Number(e.target.value));
    };
    useImperativeHandle(ref, () => ({
      focus: () => {
        ref2.current?.focus();
      },
    }));
    const ref2 = useRef<HTMLInputElement>(null);
    return (
      <div>
        <input type="number" value={count} onChange={onChange} ref={ref2} />
        {children}
      </div>
    );
  },
);
export default App;
