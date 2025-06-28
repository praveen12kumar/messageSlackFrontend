// signup cause some change on server => mutation
import { useMutation } from '@tanstack/react-query';
import {toast} from 'react-hot-toast';

import {signUpRequest } from '@/apis/auth';

export const useSignup = () => {
    const {isPending, isSuccess, error, mutateAsync:signupMutation} = useMutation({
        mutationFn:signUpRequest,
        onSuccess:({data})=>{
            console.log('successfully signed up',data);
            toast.success('Successfully signed up');
        },
        onError:(error)=>{
            console.log('Failed to signup',error);
            toast.error('Failed to signup');
        }
    });


    return{
        isPending,
        isSuccess,
        error,
        signupMutation
    };
};


