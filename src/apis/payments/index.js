import axiosConfig from '@/config/axiosConfig';

export const createOrderRequest = async({amount, token})=>{
    try {
        const response = await axiosConfig.post('/payments/order', {amount},{
            headers:{
                'x-access-token': token
            }
        });
        //console.log('order response', response);
        return response?.data?.data;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Error in creating order', error);

    }
};

export const capturePaymentRequest = async ({orderId, paymentId, status, token, signature})=>{
    //console.log('capture payment REQUEST', {orderId, paymentId, status});
    try {
        const response = await axiosConfig.post('/payments/capture', {orderId, paymentId, status, signature}, {
            headers: {
                'x-access-token': token
            }
        },
        );
        return response?.data?.data;
    } catch (error) {
        // eslint-disable-next-line no-console
        console.log('Error in capturing payment', error);
    }
};