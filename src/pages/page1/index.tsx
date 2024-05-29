import React, { FC, useState } from 'react';
import { Button } from 'antd';
interface PageProps {}
const App: FC<PageProps> = () => {
    const [count, setCount] = useState<number>(1);
    const [testObj, setTestObj] = useState<any>({
        age: 1,
    });
    const [counter, setCounter] = useState({ name: '计数器', number: 0 });
    return (
        <div>
            <h1 className="page-title">useState</h1>
            <h1 className="result">{count}</h1>
            <Button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                点击计数
            </Button>
            <br />
            <h1 className="page-title">useState不能自动合并对象</h1>
            <h1 className="result">
                {counter.name}:{counter.number}
            </h1>
            <Button
                onClick={() =>
                    setCounter({ ...counter, number: counter.number + 1 })
                }
            >
                点击设置姓名
            </Button>
        </div>
    );
};
export default App;
