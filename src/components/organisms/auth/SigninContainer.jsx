import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignin } from '@/hooks/apis/auth/useSignin';
import { validateEmail, validatePassword } from '@/utils/validate';

import SigninCard from './SigninCard';

const SigninContainer = () => {
  const navigate = useNavigate();
  const {isPending, isSuccess, error, signinMutation} = useSignin();
  
  const [signinForm, setSigninForm] = useState({
        email:'',
        password:'',
    });

const [validationError, setValidationError] = useState(null);

    async function onSigninFormSubmit(e) {
        e.preventDefault();
        console.log(signinForm);

        if(!signinForm.email || !signinForm.password){
            console.log('Please fill all the fields');
            setValidationError({message:'Please fill all the fields'});
            return;
        }

       if(!validateEmail(signinForm.email)){
            console.log('Invalid email format');
            setValidationError({message:'Invalid email format'});
            return;
        }

        if(!validatePassword(signinForm.password)){
            console.log('Invalid password format');
            setValidationError({message:'Min 8 chars: A-Z, a-z, 0-9, special (!@#...).'});
            return;
        }

        setValidationError(null);
        await signinMutation({
          email: signinForm.email,
          password: signinForm.password
        });        
    }


    useEffect(()=>{
      if(isSuccess){
        setSigninForm({email:'', password:''});
        setTimeout(()=>{
          navigate('/');
        }, 2000);
      }
    },[isSuccess, navigate]);


  return (
    <SigninCard 
        signinForm={signinForm} 
        setSigninForm={setSigninForm}  
        onSigninFormSubmit={onSigninFormSubmit}
        validationError={validationError}
        isPending={isPending}
        isSuccess={isSuccess}
        error={error}
        
        />
  );
};

export default SigninContainer;
