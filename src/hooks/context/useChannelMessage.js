import { useContext } from 'react';

import ChannelMessages from '@/context/ChannelMessages';

export const useChannelMessage = () =>{
    return useContext(ChannelMessages);
};