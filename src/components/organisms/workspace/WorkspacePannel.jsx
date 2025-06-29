import { AlertTriangle, Loader, MessageSquareTextIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import SidebarItem from '@/components/atoms/sidebarItem/SidebarItem';
import { useFetchWorkspaceDetailsById } from '@/hooks/apis/workspaces/useFetchWorkspaceDetailsById';

import WorkspacePannelHeader from '../../molecules/workspace/WorkspacePannelHeader';

const WorkspacePannel = () => {
    const {workspaceId} = useParams();

    const {isFetching, isSuccess, workspace} = useFetchWorkspaceDetailsById(workspaceId);

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
            <SidebarItem label='Threads' id='threads' icon={MessageSquareTextIcon} variant='active'/>
        </div>
    </div>
  );
};

export default WorkspacePannel;