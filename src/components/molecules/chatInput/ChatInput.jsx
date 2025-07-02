
import { useQueryClient } from '@tanstack/react-query';

import { getPresignedUrl, uploadImageToAWpresignedUrl } from '@/apis/s3';
import { Editor } from '@/components/atoms/Editor/Editor';
import { useAuth } from '@/hooks/context/useAuth';
import { useCurrentWorkspace } from '@/hooks/context/useCurrentWorkspace';
import { useSocket } from '@/hooks/context/useSocket';

export const ChatInput = () => {


    const {socket, currentChannel} = useSocket();
    const {auth} = useAuth();
    const {currentWorkspace} = useCurrentWorkspace();
    const queryClient = useQueryClient();



    async function handleSubmit({body, image}) {
        let fileUrl = null;
        if(image){
            const presignedUrl = await queryClient.fetchQuery({
                queryKey: ['fetchPresignedUrl'],
                queryFn: () => getPresignedUrl({token: auth?.token})
            });

            await uploadImageToAWpresignedUrl({url: presignedUrl, file: image});
            fileUrl = presignedUrl.split('?')[0];
        }
        socket?.emit('NewMessage', {
            channelId: currentChannel,
            body,
            image: fileUrl,
            senderId: auth?.user?._id,
            workspaceId: currentWorkspace?._id
        }, (data)=>{
            console.log('message sent', data);
        }  );
        
    }
    return (
        <div className="px-5 w-full"
        >
            <Editor 
                placeholder="Type a message..."
                onSubmit={handleSubmit}
                onCancel={() => {}}
                disabled={false}
                defaultValue=""
                
            />
        </div>
    );
};