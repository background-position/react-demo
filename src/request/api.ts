import request from './index';
const getUser = () => {
	return request('/getdata1');
};
export { getUser };
