import React, { useState, useEffect } from 'react';

export function useList() {
	const [list, setList] = useState<Array<string>>(['test1', 'test2']);
	const deleteList = (i: number) => {
		setList((state) => {
			let newList = JSON.parse(JSON.stringify(state));
			newList.splice(i, 1);
			return newList;
		});
	};
	const add = (item: string) => {
		setList((state) => {
			return [...state, item];
		});
	};
	return {
		list,
		deleteList,
		add,
	};
}
