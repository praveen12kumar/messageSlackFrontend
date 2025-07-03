import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import UserButton from '@/components/atoms/userButton/UserButton';
import { useFetchWorkspace } from '@/hooks/apis/workspaces/useFetchWorkspace';
import { useCreateWorkspaceModal } from '@/hooks/context/useCreateWorkspaceModal';


const Home = () => {

  const {isFetching, workspaces} = useFetchWorkspace();

  const navigate = useNavigate();

  const {setOpenCreateWorkspaceModal} = useCreateWorkspaceModal();

  useEffect(()=>{

    if(isFetching)
        return;
    
    if(workspaces.length === 0 || !workspaces){
      console.log('No workspaces found');
      setOpenCreateWorkspaceModal(true);
    }
    else{
      navigate(`/workspaces/${workspaces[0]?._id}`);
    }

  },[isFetching, workspaces, navigate, setOpenCreateWorkspaceModal]);

  return (
    <div className='h-dvh w-full bg-slack'>
    <div>Home</div>
    <UserButton/>

    </div>
  );
};

export default Home;