
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


export const getPaginatedMessages = async ({ channelId, limt, offset, token }) => {
  try {
    const response = await axios.get(`/messages/${channelId}`, {
      params: {
        limit: limt || 20,
        offset: offset || 0
      },
      headers: {
        'x-access-token': token
      }
    });

    console.log('all messages response', response);
    return response?.data?.data;

  } catch (error) {
    console.log('Error in getting messages', error);
  }
};
