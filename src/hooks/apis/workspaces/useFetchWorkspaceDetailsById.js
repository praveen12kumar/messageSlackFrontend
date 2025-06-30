import { useQuery } from '@tanstack/react-query';

import { fetchWorkspaceDetailsRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useFetchWorkspaceDetailsById = (workspaceId) => {
    
    const {auth} = useAuth();
    
    const {isFetching, isSuccess, error, data: workspace} = useQuery({
        queryFn: ()=> fetchWorkspaceDetailsRequest({workspaceId, token: auth.token}),
        queryKey: [`fetchWorkspaceById-${workspaceId}`],
        staleTime: 100,
    });

    return{
        isFetching,
        isSuccess,
        error,
        workspace
    };
};