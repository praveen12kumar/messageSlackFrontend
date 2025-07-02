import MessageImangeThumbnail from '@/components/atoms/messageImageThumnail/MessageImangeThumbnail';
import MessageRenderer from '@/components/atoms/messageRenderer/MessageRenderer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';


const Message = ({body, authorImage, authorName, createdAt, image}) => {
    // console.log('body', body);
    // console.log('authorImage', authorImage);
    // console.log('authorName', authorName);
    // console.log('createdAt', createdAt);

  return (
    <div className="flex flex-col gap-2 p-1.5 px-5 hover:bg-gray-100 group relative">
        <div className="flex items-center gap-2">
            <Button>
                <Avatar className="size-8" >
                    <AvatarImage src={authorImage} className='rounded-md' />
                    <AvatarFallback className='rounded-md bg-sky-800 text-white text-sm'>
                        {authorName?.charAt(0)?.toUpperCase()}
                    </AvatarFallback>
                </Avatar>
            </Button>

            <div className="flex flex-col w-full overflow-hidden">
                <div className="text-xs">
                    <button className="font-bold text-primary hover:underline">
                        {authorName}
                    </button>
                    <span>&nbsp;·&nbsp;</span>
                    <button className="text-xs text-muted-foreground hover:underline">
                        {createdAt || 'Just now'}
                    </button>
                </div>
                <MessageRenderer value={body}/>
                {image && <MessageImangeThumbnail url={image} />}
            </div>
        </div>
    </div>
  );
};

export default Message;