import { useEffect } from 'react';

import { useCaptureOrder } from '@/hooks/apis/payments/useCaptureOrder';
 


const loadRazorPayScript = (src) => {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = ()=>{
            //console.log('razorpay script loaded successfully');
            resolve(true);
        };
        script.onerror = ()=>{
            //console.log('error in loading razorpay script');
            reject(false);
        };
        document.body.appendChild(script);
    });
};

const RenderRazorPayPop = ({
    orderId, keyId, currency, amount 
}) => {


    //console.log('RenderRazorPayPop orderId',orderId);

    const {captureOrderMutation} = useCaptureOrder();

    const display = async(options)=>{
        const scriptResponse = await loadRazorPayScript('https://checkout.razorpay.com/v1/checkout.js');

        if(!scriptResponse){
            //console.log('razorpay script not loaded');
            return;
        };

        const rzp = new window.Razorpay(options);

        rzp.on('payment.failed', async (response)=>{
            // eslint-disable-next-line no-console
            console.log('payment failed', response);
            await captureOrderMutation({
                orderId: options.order_id,
                paymentId:'',
                status:'failed'
            });
        });

        rzp.open();
    };

   

    useEffect(()=>{
        display({
            key:keyId,
            amount,
            currency,
            name:'Slack App',
            description:'Test transaction',
            order_id:orderId,
            handler: async(response)=>{
                //console.log('payment response',response);
                await captureOrderMutation({
                    orderId:orderId,
                    paymentId:response.razorpay_payment_id,
                    signature:response.razorpay_signature,
                    status:'success'
                });
            },
            theme:{color:'#F37254'}
        });
    },[orderId]);

    return null;
};

export default RenderRazorPayPop;