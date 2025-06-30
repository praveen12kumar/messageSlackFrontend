
import axios from '@/config/axiosConfig';

export const getChannelById = async({channelId, token})=>{
    try {
        const response = await axios.get(`/channels/${channelId}`,{
            headers:{
                'x-access-token' : token
            }
        });

        //console.log('channel details', response);

        return response?.data?.data;


    } catch (error) {
        console.log('Error in getting channel', error);
        throw error;
    }
};