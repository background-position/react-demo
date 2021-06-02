import React, { useState, useEffect, FC } from 'react';
import { Button } from 'antd';
import { useList } from '../hooks';
interface PageProps {}
const App: FC<PageProps> = () => {
	const { list, add, deleteList } = useList();
	return (
		<div>
			{list.map((e: string, i: number) => {
				return (
					<div key={i}>
						e{' '}
						<Button
							onClick={() => {
								deleteList(i);
							}}
						>
							删除
						</Button>{' '}
					</div>
				);
			})}
		</div>
	);
};
export default App;
