import { LucideLoader } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DropdownMenuContent } from '@/components/ui/dropdown-menu';
import { useFetchWorkspace } from '@/hooks/apis/workspaces/useFetchWorkspace';
import { useFetchWorkspaceDetailsById } from '@/hooks/apis/workspaces/useFetchWorkspaceDetailsById';


const WorkspaceSwitcher = () => {
    const navigate = useNavigate();

    const {workspaceId} = useParams();

    const {isFetching, workspace} = useFetchWorkspaceDetailsById(workspaceId);
    const {isFetching: isFetchingWorkspaces, workspaces} = useFetchWorkspace();
  return (
    <DropdownMenu >
        <DropdownMenuTrigger>
            <Button className='size-9 relative overflow-hidden bg-slate-300 hover:bg-slate-300/80 text-semibold text-slate-800 text-xl'>
            {
                isFetching ? <LucideLoader className='animate-spin ml-2'/> : workspace?.name[0]?.toUpperCase() 
            }
            </Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
            <DropdownMenuItem className='cursor-pointer flex-col justify-start gap-y-0.5 capitalize'>
                {workspace?.name}
                <span className='text-xs text-muted-foreground'>(Active Workspace)</span>
            </DropdownMenuItem>
            {
                isFetchingWorkspaces ? <LucideLoader className='animate-spin ml-2'/> :
                workspaces?.map(workspace =>{
                    if(workspace?._id === workspaceId) return null;
                    return(
                         <DropdownMenuItem 
                            onClick={()=>navigate(`/workspaces/${workspace._id}`)}
                            className='cursor-pointer flex-col justify-start gap-y-0.5 capitalize'
                            key={workspace._id}><p className='truncate'>{workspace.name}</p></DropdownMenuItem>   
                    );
                })
            }
        </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkspaceSwitcher;