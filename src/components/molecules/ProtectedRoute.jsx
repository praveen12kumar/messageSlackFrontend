
import { Navigate} from 'react-router-dom';

import { useAuth } from '@/hooks/context/useAuth';

const ProtectedRoute = ({children}) => {

    const {auth} = useAuth();

// If the loading state become false, then re-render the component


    if(auth.isLoading){
        return <div className="h-dvh flex items-center justify-center">Loading...</div>;
    }

    if(!auth.user || !auth.token){
       return <Navigate to='/auth/signin'/>;
    }

  return children;
};

export default ProtectedRoute;