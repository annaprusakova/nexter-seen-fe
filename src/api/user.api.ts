import axios from 'axios';
import { USER_ROUTE } from '@/api/apiConstant';
import { SingUpRequest } from '@/dto/request/SingUpRequest';

export const signUpRequest = (data: Omit<SingUpRequest, 'confirmPassword'>) => {
	try {
		return axios.post(USER_ROUTE + '/signup', data);
	} catch (error) {
		console.error(error);
	}
};
