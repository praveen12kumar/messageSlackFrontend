import { cva } from 'class-variance-authority';
import { Link, useParams } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';


const sidebarItemVariants = cva(
    'flex items-center justify-start gap-1.5 font-normal h-7 px-3 text-sm overflow-hidden',
    {
        variants:{
            variant:{
                default: 'text-[#9edffcc]',
                active: 'text-[#481350] bg-white/90 hover:bg-white/80',
            }
        },
        defaultVariants:'default'
    }
);

const SidebarItem = ({label,id, icon:Icon, variant}) => {

    const {workspaceId} = useParams();

  return (


    <Button
        variant="transparent"
        size='sm'
        className={cn(sidebarItemVariants({variant}))}
        >
            <Link
                to={`/workspaces/${workspaceId}/channels/${id}`}
                className='flex items-center gap-1'
                >
                <Icon className="size-4 mr-1"/>
                <span className="text-sm">{label}</span>
            </Link>

    </Button>
  );
};

export default SidebarItem;