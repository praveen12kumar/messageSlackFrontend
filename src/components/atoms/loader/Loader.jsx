import { Loader2Icon } from 'lucide-react';

const Loader = () => {
  return (
    <div
                className='h-full flex-1 flex items-center justify-center'
            >
                <Loader2Icon className='size-5 animate-spin text-muted-foreground' />
            </div>
  );
};

export default Loader;