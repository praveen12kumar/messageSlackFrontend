import { TriangleAlertIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import Loader from '@/components/atoms/loader/Loader';
import { ChatInput } from '@/components/molecules/chatInput/ChatInput';
import { useGetChannelById } from '@/hooks/apis/channels/useGetChannelById';

const Channel = () => {
    const {channelId} = useParams();

    const {isFetching, isError , channelDetails} = useGetChannelById(channelId);


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
            <div className='flex-1' />
            <p>{channelDetails?.name}</p>
            <ChatInput />
        </div>
  );
};

export default Channel;