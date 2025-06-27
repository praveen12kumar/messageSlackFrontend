// signup cause some change on server => mutation
import { useMutation } from '@tanstack/react-query';

import { signInRequest,signUpRequest } from '@/apis/auth';

export const useSignup = () => {
    const {isPending, isSuccess, error, mutate:signupMutation} = useMutation({
        mutationFn:signUpRequest,
        onSuccess:({data})=>console.log('successfully signed up',data),
        onError:(error)=>console.log('Failed to signup',error)
    });


    return{
        isPending,
        isSuccess,
        error,
        signupMutation
    };
};
export const useSignin = () => {
    const {isPending, isSuccess, error, mutateAsync:signinMutation} = useMutation({
        mutationFn:signInRequest,
        onSuccess:({data})=>console.log('successfully signed in',data),
        onError:(error)=>console.log('Failed to sign in',error)
    });

    return{
        isPending,
        isSuccess,
        error,
        signinMutation
    };
};