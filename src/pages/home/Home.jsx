import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import UserButton from '@/components/atoms/userButton/UserButton';
import { useFetchWorkspace } from '@/hooks/apis/workspaces/useFetchWorkspace';


const Home = () => {

  const {isFetching, workspaces} = useFetchWorkspace();

  const navigate = useNavigate();

  useEffect(()=>{

    if(isFetching)
        return;
    
    if(workspaces.length === 0 || !workspaces){
      console.log('No workspaces found');
    }
    else{
      navigate(`/workspaces/${workspaces[0]?._id}`);
    }

  },[isFetching, workspaces, navigate]);

  return (
    <>
    <div>Home</div>
    <UserButton/>

    </>
  );
};

export default Home;