import axios, { isAxiosError } from 'axios';
import { HOST, USER_ROUTE } from '@/api/apiConstant';
import { SingUpRequest } from '@/dto/request/SingUpRequest';

export const signUpRequest = async (
	data: Omit<SingUpRequest, 'confirmPassword'>
) => {
	try {
		return await axios.post(USER_ROUTE + '/signup', data);
	} catch (error) {
		if (isAxiosError(error)) {
			console.error(error);
			return error as any;
		}
	}
};

export const verifyRequest = async (token: string) => {
	try {
		return await axios.get(HOST + `/verify/${token}`);
	} catch (error) {
		if (isAxiosError(error)) {
			console.error(error);
			return error as any;
		}
	}
};
