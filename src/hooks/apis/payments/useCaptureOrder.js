import { useMutation } from '@tanstack/react-query';

import { capturePaymentRequest } from '@/apis/payments';
import { useAuth } from '@/hooks/context/useAuth';

export const useCaptureOrder = ()=>{

    const {auth} = useAuth();
    const {isPending, isSuccess, error, mutateAsync: captureOrderMutation} = useMutation({
        mutationFn:({orderId, paymentId, status, signature})=>capturePaymentRequest({
            orderId,
            paymentId,
            status,
            token: auth?.token,
            signature
        }),
        mutationKey: ['capturePayment'],
    });

    return{
        isPending,
        isSuccess,
        error,
        captureOrderMutation
    };
};