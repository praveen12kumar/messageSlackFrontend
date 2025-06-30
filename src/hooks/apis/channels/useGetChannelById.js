import { useQuery } from '@tanstack/react-query';

import { getChannelById } from '@/apis/channels';
import { useAuth } from '@/hooks/context/useAuth';


export const useGetChannelById = (channelId)=>{
    const {auth} = useAuth();

    const {isFetching, isSuccess, error, data:channelDetails} = useQuery({
        queryFn: ()=> getChannelById({channelId, token: auth?.token}),
        queryKey: [`getChannelById-${channelId}`],
    });

    return {
        isFetching,
        isSuccess,
        error,
        channelDetails
    };
};