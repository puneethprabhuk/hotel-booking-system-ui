import { AxiosError } from 'axios';
import type { AuthRequest, AuthResponse, RegisterRequest } from './auth.types'
import { storage } from '@/utils/storage';
import { api } from '@/utils/api';

export async function login(loginData: AuthRequest): Promise<AuthResponse> {
    try {
        const res = await api.post<AuthResponse>('/user/login', loginData);
        const resData = res.data;

        if (res.status === 200 && resData.data?.token) {
            const { user, token } = resData.data;
            storage.setToken(token);
            if (user) {
                storage.setUser(user);
                storage.setRoles(user?.roles || []);
            }
            return resData;
        } else {
            throw new Error("Login Failed, please try again");
        }
    } catch (error: unknown) {
        const serverError = error as AxiosError<{ message: string }>;
        throw new Error(serverError?.response?.data?.message || "Something went wrong");

    }
}

export async function signup(signupData: RegisterRequest): Promise<AuthResponse> {
    try {

        const res = await api.post('/user/register', signupData);
        const resData = res.data;

        if (res.status === 201 && resData.data?.token) {
            const { user, token } = resData.data;
            storage.setToken(token);
            if (user) {
                storage.setUser(user);
                storage.setRoles(user?.roles || []);
            }
            return resData;
        } else {
            throw new Error("Login Failed, please try again");
        }

    } catch (error: unknown) {
        const serverError = error as AxiosError<{ message: string }>;
        throw new Error(serverError?.response?.data?.message || "Something went wrong");
    }

}