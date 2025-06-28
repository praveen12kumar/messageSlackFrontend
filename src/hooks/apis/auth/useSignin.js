import { useMutation } from '@tanstack/react-query';
import {toast} from 'react-hot-toast';

import { signInRequest } from '@/apis/auth';
import { useAuth } from '@/hooks/context/useAuth';

export const useSignin = () => {
    const {setAuth} = useAuth();
    const {isPending, isSuccess, error, mutateAsync:signinMutation} = useMutation({
        mutationFn:signInRequest,
        onSuccess:(response)=>{
            console.log('successfully signed in',response);

            const userObject = JSON.stringify(response.data);
            
            localStorage.setItem('user', userObject);
            localStorage.setItem('token', response.data.token);

            setAuth({
                user: response.data,
                token: response.data.token
            });

            toast.success('Successfully signed in');
        },
        onError:(error)=>{
            console.log('Failed to sign in',error);
            toast.error('Failed to sign in');
        }
    });

    return{
        isPending,
        isSuccess,
        error,
        signinMutation
    };
};