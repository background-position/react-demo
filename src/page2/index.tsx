import React, { useEffect, FC } from 'react';
import axios from 'axios';
import request from 'umi-request';
interface PageProps {}
const App: FC<PageProps> = () => {
	const getDat = async () => {
		try {
			let res = await axios.get(
				'https://testvipoms.mobimedical.cn/api/vipoms/customerManager/getByIdCustomerProject',
			);
			console.log(res);
			//	let res2 = await request.get('http://localhost:3000/#/getdata1');
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
