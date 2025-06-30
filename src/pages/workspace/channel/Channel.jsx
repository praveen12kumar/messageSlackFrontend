import { useParams } from 'react-router-dom';

const Channel = () => {
    const {channelId} = useParams();

    console.log('channelId', channelId);

  return (
    <div>Channel</div>
  );
};

export default Channel;