import { useMutation } from '@tanstack/react-query';

import { addMemberToWorkspaceRequest } from '@/apis/workspaces';
import { useAuth } from '@/hooks/context/useAuth';

export const useAddMemberToWorkspaces = (workspaceId) => {
    const {auth} = useAuth();

    const {isPending, isSuccess, error, mutateAsync: addMemberToWorkspaceMutation} = useMutation({
        mutationFn: () => addMemberToWorkspaceRequest({workspaceId, token: auth?.token}),

        onSuccess: () => {
            console.log('Member added to workspace successfully');
        },

        onError: (error) => {
            console.log('Error in adding member to workspace', error);
        }
    });

    return{
        isPending,
        isSuccess,
        error,
        addMemberToWorkspaceMutation
    };
};