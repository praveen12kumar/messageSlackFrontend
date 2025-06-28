
import { LogOutIcon, SettingsIcon } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/context/useAuth';

const UserButton = () => {
  const { auth } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="size-10 hover:opacity-60 transition-all ease-in duration-200">
          <AvatarImage src={auth?.user?.avatar} />
          <AvatarFallback>{auth?.user?.username[0]?.toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem><SettingsIcon className='size-4 ml-2 h-10' />Settings </DropdownMenuItem>
        <DropdownMenuItem><LogOutIcon className='size-4 ml-2 h-10' />Logout</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
