import { extend } from 'umi-request';

const request = extend({
	prefix: '',
	timeout: 1000,
	headers: {
		'Content-Type': 'multipart/form-data',
	},
});
export default request;
