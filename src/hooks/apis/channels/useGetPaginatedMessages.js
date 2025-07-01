import { useQuery } from '@tanstack/react-query';

import { getPaginatedMessages } from '@/apis/channels';
import { useAuth } from '@/hooks/context/useAuth';

export const useGetPaginatedMessages = (channelId) => {
    const {auth} = useAuth();

    const {isFetching, isSuccess, error, data:messages} = useQuery({
        queryFn: ()=> getPaginatedMessages({channelId, limt:10, offset:0, token:auth?.token}),
        queryKey: [`getPaginatedMessages-${channelId}`],
    });

    return{
        isFetching,
        isSuccess,
        error,
        messages
    };
};