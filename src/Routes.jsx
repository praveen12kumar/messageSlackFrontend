import {Route,Routes} from 'react-router-dom';

import SigninContainer from '@/components/organisms/auth/SigninContainer';
import SignupContainer from '@/components/organisms/auth/SignupContainer';
import Auth from '@/pages/auth/Auth';
import Home from '@/pages/home/Home';
import NotFound from '@/pages/notFound/NotFound';

export const AppRoutes = ()=>{


    return(
    <Routes>
        <Route path='/auth/signup' element = {<Auth>{<SignupContainer/>}</Auth>} />
        <Route path='/auth/signin' element ={<Auth><SigninContainer/></Auth>}/> 
        <Route path='/' element={<Home/>}/>

        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    );
};