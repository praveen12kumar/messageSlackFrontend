import { BellIcon, HomeIcon, MessageSquareIcon, MoreHorizontalIcon } from 'lucide-react';

import UserButton from '@/components/atoms/userButton/UserButton';
import SidebarButton from '@/components/molecules/sibarButton/SidebarButton';

import WorkspaceSwitcher from './WorkspaceSwitcher';
const WorkspaceSidebar = () => {
  return (
    <aside className="w-[100px] h-full bg-slack-dark text-white flex flex-col items-center justify-center gap-8 pt-4">
        
        <WorkspaceSwitcher/>
        
        <SidebarButton Icon={HomeIcon} label='Home'/>

        <SidebarButton Icon={MessageSquareIcon} label='Messages'/>

        <SidebarButton Icon={BellIcon} label='Notifications'/>

        <SidebarButton Icon={MoreHorizontalIcon} label='More'/>

        <div className="flex flex-col items-center justify-center mt-auto gap-y-1 mb-10">
            <UserButton/>
        </div>


    </aside>
  );
};

export default WorkspaceSidebar;