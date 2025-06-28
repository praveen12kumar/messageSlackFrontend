import { LucideLoader } from 'lucide-react';

//import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useFetchWorkspaceDetailsById } from '@/hooks/apis/workspaces/useFetchWorkspaceDetailsById';


const WorkspaceSwitcher = () => {
    //const navigate = useNavigate();

    const {workspaceId} = useParams();

    const {isFetching, workspace} = useFetchWorkspaceDetailsById(workspaceId);

  return (
    <DropdownMenu >
        <DropdownMenuTrigger>
            <Button className='size-9 relative overflow-hidden bg-slate-300 hover:bg-slate-300/80 text-semibold text-slate-800 text-xl'>
            {
                isFetching ? <LucideLoader className='animate-spin ml-2'/> : workspace?.name[0]?.toUpperCase() 
            }
            </Button>
        </DropdownMenuTrigger>
    </DropdownMenu>
  );
};

export default WorkspaceSwitcher;