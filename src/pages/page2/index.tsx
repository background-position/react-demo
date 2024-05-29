import React, { useEffect, FC } from 'react';
import axios from 'axios';
import request from 'umi-request';
interface PageProps {}
const App: FC<PageProps> = () => {
    const getDat = async () => {
        try {
            let res = await axios.get('/api/users');
            // let res2 = await request('/api/users/create', {
            //     method: 'POST',
            // });
            console.log(res);
        } catch (error) {}
    };
    useEffect(() => {
        getDat();
    }, []);
    return (
        <div>
            <h1 className="page-title">useEffect</h1>
            <h1 className="result"></h1>
        </div>
    );
};
export default App;
