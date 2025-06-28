
import { ChevronDown, ListFilterIcon, SquarePenIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem,DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/context/useAuth';
import { useWorkspacePreferencesModal } from '@/hooks/context/useWorkspacePreferencesModal';


const WorkspacePannelHeader = ({workspace}) => {

    const workspacemembers = workspace?.members;

    const {setOpenPreferensesModal, setInitialValue} = useWorkspacePreferencesModal();

    const {auth} = useAuth();
    //console.log(auth);
    const isLoggedUserAdminOfWorkspace = workspacemembers?.find(member => member?.memberId === auth?.user?._id && member?.role === 'admin');
    //console.log(isLoggedUserAdminOfWorkspace);
  return (
    <div className="flex items-center justify-evenly px-4 h-14 gap-1">
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Button className='bg-transparent font-semibold text-lg w-auto p-1.5 overflow-hidden flex items-center shadow-md hover:bg-accent/15 hover:transition-all duration-200 ease-in'>
                    <span className='text-sm truncate'>    
                    {workspace?.name}</span>
                    <ChevronDown className='size-4 ml-1'/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side='bottom' align='start' width={100}>
                <DropdownMenuItem >
                    <div className="size-9 relative overflow-hidden text-white bg-[#616161] font-semibold text-xl rounded-md flex items-center justify-center mr-2">
                        {
                        workspace?.name?.charAt(0)?.toUpperCase()
                        }
                    </div>
                    <div className="flex flex-col items-start">
                        <p className='font-bold text-base'>{workspace?.name}</p>
                        <p className='text-sm text-muted-foreground'>Active Workspace</p>
                    </div>
                </DropdownMenuItem>
                {
                    isLoggedUserAdminOfWorkspace &&
                    <>
                    <DropdownMenuItem className='cursor-pointer py-2'
                        onClick={()=>{
                            setOpenPreferensesModal(true);
                            setInitialValue(workspace?.name);
                        } }
                    >
                            Preferences
                    </DropdownMenuItem>
                    
                    <DropdownMenuSeparator/>

                    <DropdownMenuItem className='cursor-pointer py-2'>
                        Invite people to {workspace?.name}
                    </DropdownMenuItem>
                    </>
                }

            </DropdownMenuContent>
            <div className="flex items-center gap-0/5">
                <Button className='bg-transparent font-semibold text-lg w-auto p-1.5 overflow-hidden flex items-center shadow-md hover:bg-accent/15 hover:transition-all duration-200 ease-in'>
                    <ListFilterIcon className='size-4'/>
                    <SquarePenIcon className='size-5'/>
                </Button>
                
            </div>
        </DropdownMenu>
    </div>
  );
};

export default WorkspacePannelHeader;