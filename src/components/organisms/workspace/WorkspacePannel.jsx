import { AlertTriangle, HashIcon, Loader, MessageSquareTextIcon, SendHorizonalIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import SidebarItem from '@/components/atoms/sidebarItem/SidebarItem';
import { UserItem } from '@/components/molecules/userItem/UserItem';
import { WorkspacePanelSection } from '@/components/molecules/workspace/WorkspacePanelSection';
import { useFetchWorkspaceDetailsById } from '@/hooks/apis/workspaces/useFetchWorkspaceDetailsById';
import { useCreateChannelModal } from '@/hooks/context/useCreateChannelModal ';

import WorkspacePannelHeader from '../../molecules/workspace/WorkspacePannelHeader';

const WorkspacePannel = () => {
    const {workspaceId} = useParams();

    const {isFetching, isSuccess, workspace} = useFetchWorkspaceDetailsById(workspaceId);
    //console.log('workspace', workspace);
    const {setOpenCreateChannelModal} = useCreateChannelModal();


    if(isFetching){
        return (
            <div className='h-full flex flex-col gap-y-2 items-center justify-center text-white text-xl'>
            <Loader className='animate-spin ml-2 size-4'/>
            </div>
        );
    }

    if(!isSuccess){
        return(
            <div className="h-full flex flex-col gap-y-2 items-center justify-center text-white text-xl">
                <AlertTriangle className='size-6 text-white'/>
                <p className='text-lg'>Something went wrong</p>
            </div>
        );
    }

    
  return (
    <div className="flex flex-col h-full bg-slack-medium">
        <WorkspacePannelHeader workspace={workspace} />
        <div className="flex flex-col px-2 mt-4">
            <SidebarItem 
                label='Threads' 
                id='threads' 
                icon={MessageSquareTextIcon} 
                variant='active'
            />
            <SidebarItem 
                    label="Drafts & Sends"
                    icon={SendHorizonalIcon}
                    id="drafts"
                    variant='default'
                />
        </div>

        <WorkspacePanelSection
               label={'Channels'}
                onIconClick={()=>setOpenCreateChannelModal(true)}
            >
                {workspace?.channels?.map((channel) => {
                    return <SidebarItem key={channel._id} icon={HashIcon} label={channel.name} id={channel._id} />;
                })}
        </WorkspacePanelSection>

        <WorkspacePanelSection
          label={'Direct messages'}
          onIconClick={()=>{}}
          >
            {workspace?.members?.map((item) => {
                return <UserItem key={item?.memberId?._id} id={item?.memberId._id} image={item?.memberId?.avatar} label={item?.memberId?.username} />;
            })}
        </WorkspacePanelSection>
    </div>
  );
};

export default WorkspacePannel;