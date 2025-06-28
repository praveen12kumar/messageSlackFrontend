import { useEffect } from 'react';

import UserButton from '@/components/atoms/userButton/UserButton';
import { useFetchWorkspace } from '@/hooks/apis/workspaces/useFetchWorkspace';


const Home = () => {

  const {isFetching, isSuccess, error, workspaces} = useFetchWorkspace();

  useEffect(()=>{

    if(isFetching)
        return;
    
    if(workspaces.length === 0 || !workspaces){
      console.log('No workspaces found');
    }

  },[isFetching, workspaces]);

  return (
    <>
    <div>Home</div>
    <UserButton/>

    </>
  );
};

export default Home;