import { useQueryClient } from '@tanstack/react-query';
import { TriangleAlertIcon } from 'lucide-react';
import { useEffect, useRef} from 'react';
import { useParams } from 'react-router-dom';

import Loader from '@/components/atoms/loader/Loader';
import ChannelHeader from '@/components/molecules/channelHeader/ChannelHeader';
import { ChatInput } from '@/components/molecules/chatInput/ChatInput';
import Message from '@/components/molecules/message/Message';
import { useGetChannelById } from '@/hooks/apis/channels/useGetChannelById';
import { useGetPaginatedMessages } from '@/hooks/apis/channels/useGetPaginatedMessages';
import { useChannelMessage } from '@/hooks/context/useChannelMessage';
import { useSocket } from '@/hooks/context/useSocket';

const Channel = () => {
    const {channelId} = useParams();
    const queryClient = useQueryClient();
    
    const {isFetching, isError , channelDetails} = useGetChannelById(channelId);
    const {messageList, setMessageList} = useChannelMessage();
    
    const {joinChannel} = useSocket();

    const { messages, isSuccess} = useGetPaginatedMessages(channelId);
    console.log('all Messages', messages);
    const messageContainerListRef = useRef(null);
    console.log('messageList', messageList);


    useEffect(() => {
        if(messageContainerListRef.current) {
            messageContainerListRef.current.scrollTop = messageContainerListRef.current.scrollHeight;
        }
    }, [messageList]);

    useEffect(()=>{
      console.log('channelId', channelId);
      queryClient.invalidateQueries(`fetchChannelById-${channelId}`);
    },[channelId, queryClient]);

    useEffect(() => {
        if(!isFetching && !isError) {
            
            joinChannel(channelId);

        }
    }, [isFetching, isError, joinChannel, channelId]);

    useEffect(() => {
        if(isSuccess ) {
            console.log('Channel Messages fetched');
            setMessageList(messages.reverse());
        }
    }, [isSuccess, messages, setMessageList, channelId]);

    if(isFetching){
      return <Loader/>;
    }

    if(isError)
        return (
            <div className='h-full flex-1 flex flex-col gap-y-2 items-center justify-center'>
                <TriangleAlertIcon className='size-6 text-muted-foreground' />
                <span className='text-sm text-muted-foreground'>Channel Not found</span>
            </div>
        );
    


        


  return (
    <div className='flex flex-col h-full'>
            <ChannelHeader name={channelDetails?.name} />

            {/* We need to make sure that below div is scrollable for the messages */}
            <div
                ref={messageContainerListRef}
                className='flex-5 overflow-y-auto p-5 gap-y-2'
            >
                {messageList?.map((message) => {
                    return <Message key={message._id} 
                              body={message.body} 
                              authorImage={message.senderId?.avatar} 
                              authorName={message.senderId?.username} 
                              createdAt={message.createdAt} 
                              image={message.image}   
                          />;
                })}   
            </div>         

            
            <div className='flex-1' /> 
            <ChatInput />
        </div>
  );
};

export default Channel;