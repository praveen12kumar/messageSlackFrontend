import { useMutation } from '@tanstack/react-query';

import { createOrderRequest } from '@/apis/payments';
import { useAuth } from '@/hooks/context/useAuth';

export const useCreateOrder = () =>{
    const {auth} = useAuth();

    const {isFetching, isSuccess, error, mutateAsync:createOrderMutation} = useMutation({
        mutationFn: (amount) => createOrderRequest({amount, token: auth?.token}),

        onSuccess: () => {
            console.log('Order created successfully');
        },

        onError: (error) => {
            console.log('Error in creating order', error);
        }
    });

    return {
        isFetching,
        isSuccess,
        error,
        createOrderMutation
    
    };
};