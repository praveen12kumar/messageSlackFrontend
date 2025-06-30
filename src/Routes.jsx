import {Route,Routes} from 'react-router-dom';

import SigninContainer from '@/components/organisms/auth/SigninContainer';
import SignupContainer from '@/components/organisms/auth/SignupContainer';
import Auth from '@/pages/auth/Auth';
import Home from '@/pages/home/Home';
import NotFound from '@/pages/notFound/NotFound';

import ProtectedRoute from './components/molecules/ProtectedRoute';
import { JoinPage } from './pages/workspace/JoinPage';
import WorkspaceLayout from './pages/workspace/Layout';
export const AppRoutes = ()=>{


    return(
    <Routes>
        <Route path='/auth/signup' element = {<Auth>{<SignupContainer/>}</Auth>} />
        <Route path='/auth/signin' element ={<Auth><SigninContainer/></Auth>}/> 
        <Route path='/' element={<ProtectedRoute><Home/></ProtectedRoute>}/>

        <Route path='/workspaces/:workspaceId' element={<ProtectedRoute><WorkspaceLayout>Workspace</WorkspaceLayout></ProtectedRoute>}/>
        <Route path='/workspaces/:workspaceId/channels/:channelId' element={<ProtectedRoute>Channel</ProtectedRoute>}/>
        
        <Route path='/workspaces/join/:workspaceId' element={<ProtectedRoute><JoinPage/></ProtectedRoute>}/>

        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    );
};