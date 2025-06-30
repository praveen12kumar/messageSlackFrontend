import { useMutation } from '@tanstack/react-query';

import { addChannelToWorkspaceRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useAddChannelToWorkspace = ()=>{
    const {auth} = useAuth();

    const {isPending, isSuccess, error, mutateAsync: addChannelToWorkspaceMutation} = useMutation({
        mutationFn: ({workspaceId, channelName}) => addChannelToWorkspaceRequest({workspaceId, channelName, token: auth?.token}),
        
        onSuccess:()=>{
            console.log('Channel added to workspace successfully');
        },

        onError:(error)=>{
            console.log('Error in adding channel to workspace', error);
        }
    });

    return{
        isPending,
        isSuccess,
        error,
        addChannelToWorkspaceMutation
    };
};