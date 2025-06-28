import { useMutation } from '@tanstack/react-query';

import { createWorkspaceRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useCreateWorkspace = ()=>{

    const {auth} = useAuth();

    const {isPending, isSuccess, error, mutateAsync: createWorkspaceMutation} = useMutation({
        mutationFn: (data)=> createWorkspaceRequest({...data, token: auth.token}),

        onSuccess: ((response) =>{
            console.log('workspace created', response);
        }),

        onError: ((error) =>{
            console.log('Error in creating workspace', error);
        }),

    });

    return {
        isPending,
        isSuccess,
        error,
        createWorkspaceMutation
    };

};