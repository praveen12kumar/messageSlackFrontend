import { Button } from '@/components/ui/button';


const SidebarButton = ({
    Icon, label, 
}) => {
  return (
    <div className='w-full flex flex-col items-center justify-center cursor-pointer'>
        <Button 
            //variant={isActive ? 'secondary' : 'ghost'}
            variant='ghost'
            className='size-9 p-2 group-hover:bg-accent/20 flex flex-col  items-center justify-start gap-y-0.5'
            >
            <Icon className="size-5 text-white group-hover:scale-110 transition-all duration-200 ease-in" />
            <span className='text-sm text-white group-hover:text-accent'>{label}</span>
        </Button>
    </div>
  );
};

export default SidebarButton;