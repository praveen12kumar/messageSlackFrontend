import { useQuery } from '@tanstack/react-query';

import { fetchWorkspaceDetailsRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useFetchWorkspaceDetailsById = (id) => {
    const {auth} = useAuth();
    
    const {isFetching, isSuccess, error, data: workspace} = useQuery({
        queryFn: (id)=> (fetchWorkspaceDetailsRequest({workspaceId: id, token: auth.token})),
        queryKey: [`fetchWorkspaceDetailsById-${id}`],
        staleTime: 10000 ,
    });

    return{
        isFetching,
        isSuccess,
        error,
        workspace
    };
};