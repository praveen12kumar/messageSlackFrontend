
import { FiLoader } from 'react-icons/fi';
import { Navigate} from 'react-router-dom';

import { useAuth } from '@/hooks/context/useAuth';

const ProtectedRoute = ({children}) => {

    const {auth} = useAuth();

// If the loading state become false, then re-render the component


    if(auth.isLoading){
        return <div className='h-dvh text-white flex flex-col items-center justify-center bg-slack'>
            <FiLoader className='animate-spin size-8'/>
            <div className="text-xl mt-4 tracking-widest font-semibold">Loading...</div>
        </div>;
    }

    if(!auth.user || !auth.token){
       return <Navigate to='/auth/signin'/>;
    }
    
  return children;
};

export default ProtectedRoute;