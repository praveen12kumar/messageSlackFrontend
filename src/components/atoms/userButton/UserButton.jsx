
import { LogOutIcon, SettingsIcon } from 'lucide-react';
import toast from 'react-hot-toast';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/context/useAuth';
import { useCreateWorkspaceModal } from '@/hooks/context/useCreateWorkspaceModal';

const UserButton = () => {
  const { auth, logout } = useAuth();
  const navigate = useNavigate();

  const {setOpenCreateWorkspaceModal} = useCreateWorkspaceModal();

  async function handleLogout() {
    await logout();
    toast.success('Successfully logged out');
    navigate('/auth/signin');
  }


  function openWorkspaceModal() {

    setOpenCreateWorkspaceModal(true);
   
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-10 hover:opacity-60 hover:scale-110 transition-all ease-in duration-200">
          <AvatarImage 
              src={auth?.user?.avatar}
              />
          <AvatarFallback>{auth?.user?.username[0]?.toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={openWorkspaceModal} ><FaPlus className='size-5'/>Create workspace</DropdownMenuItem>
        <DropdownMenuItem><SettingsIcon className='size-4 ml-2 h-10' />Settings </DropdownMenuItem>
        <DropdownMenuItem onClick={handleLogout} ><LogOutIcon className='size-4 ml-2 h-10' />Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
