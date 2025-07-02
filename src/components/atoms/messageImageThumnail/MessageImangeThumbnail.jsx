import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';


const MessageImangeThumbnail = ({url}) => {
  return (
    <Dialog>   
        <DialogTrigger>
            <div className="relative overflow-hidden cursor-zoom-in border rounded-lg max-w-[370px]">
                <img src={url} className="rounded-md object-cover size-full"/>
            </div>
        </DialogTrigger>
        <DialogContent className='max-w[850px] border-none bg-transparent shadow-none p-0'>
            <img src={url} className="rounded-md object-cover size-full"/>
        </DialogContent>
    </Dialog>
  );
};

export default MessageImangeThumbnail;