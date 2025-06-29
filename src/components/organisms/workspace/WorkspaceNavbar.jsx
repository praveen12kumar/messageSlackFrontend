
//import { LucideLoader } from 'lucide-react';
import { InfoIcon, SearchIcon } from 'lucide-react';
import { useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { useFetchWorkspaceDetailsById } from '@/hooks/apis/workspaces/useFetchWorkspaceDetailsById';

const WorkspaceNavbar = () => {

    const {workspaceId} = useParams();
    //console.log('workspaceId in Options', workspaceId);

    const { workspace} = useFetchWorkspaceDetailsById(workspaceId);
    
    // if(isFetching){
    //     return <LucideLoader className='animate-spin ml-2'/>;
    // }


  return (
    <nav className='flex items-center justify-center h-10 p-1.5 bg-slack-dark'>
        <div className="flex-1"></div>
        <div className="">
            <Button className='w-full flex items-center justify-start gap-x-2 bg-accent/25 hover:bg-accent/15 transition-all duration-200 ease-in'
                size='sm'
            >
                <SearchIcon className='size-5 text-white mr-3'/>
                <span>Search {workspace?.name || 'Workspace'}</span>
            </Button>
        </div>

        <div className="ml-auto flex-1 flex items-center justify-end ">
            <Button
                className='bg-transparent hover:bg-accent/15 hover:transition-all duration-200 ease-in'
                size='sm'
                >
                <InfoIcon className='size-5 text-white'/>
            </Button>
        </div>
    </nav>
  );
};

export default WorkspaceNavbar;