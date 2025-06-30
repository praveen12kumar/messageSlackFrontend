import { CopyIcon, RefreshCcw } from 'lucide-react';
import toast from 'react-hot-toast';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useResetJoinCodeToWorkspace } from '@/hooks/apis/workspaces/useResetJoinCodeToWorkspace';


export const WorkspaceInviteModal = ({openInviteModal, setOpenInviteModal, workspaceId,  workspaceName, joinCode}) => {
   
    const {resetJoinCodeMutation} = useResetJoinCodeToWorkspace(workspaceId);

    async function handleCopy() {
        const inviteLink = `${window.location.origin}/join/${joinCode}`;
        console.log(inviteLink);
        await navigator.clipboard.writeText(inviteLink);
        toast.success('Copied to clipboard');
    }

    async function handleResetCopy() {
        try {
            await resetJoinCodeMutation();
            toast.success('Join code reset successfully');
        } catch (error) {
            console.log(error);
            toast.error('Error in resetting join code');
        }
    }
    
    return (
        <Dialog open={openInviteModal}
                onOpenChange={setOpenInviteModal}
                >
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Invite people to {workspaceName} </DialogTitle>
                    <DialogDescription>
                        Use the code show below to invite people to your workspace
                    </DialogDescription>
                </DialogHeader>

                <div className="flex flex-col items-center justify-center p-2">
                    <p className='text-3xl font-bold uppercase'>{joinCode}</p>

                    <Button 
                        variant='ghost'
                        size='sm'
                        onClick={handleCopy}
                        >
                        Copy Link
                        <CopyIcon className='size-4 ml-2'/>
                    </Button>
                </div>

                <div className="w-full flex flex-col items-center justify-center p-2 mt-5">
                    <Button 
                        variant='outline'
                        size='sm'
                        onClick={handleResetCopy}
                        >
                        Reset Join Code
                        <RefreshCcw className='size-4 ml-2'/>
                    </Button>
                </div>



            </DialogContent>

        </Dialog>
    );
};