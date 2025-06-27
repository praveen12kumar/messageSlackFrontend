import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignup } from '@/hooks/apis/auth/useSignup';

import SignupCard from './SignupCard';

const SignupContainer = () => {
    const navigate = useNavigate();
    const [signupForm, setSignupForm] = useState({
        email:'',
        password:'',
        confrimPassword:'',
        username:'',
    });

    const [validationError, setValidationError] = useState(null);

    const {isPending, isSuccess, error, signupMutation} = useSignup();


    async function onSignupFormSubmit(e) {
        e.preventDefault();
        // console.log(signupForm);
        if(!signupForm.email || !signupForm.password || !signupForm.confrimPassword || !signupForm.username){
            console.log('Please fill all the fields');
            setValidationError({message:'Please fill all the fields'});
            return;
        }

        if(signupForm.password !== signupForm.confrimPassword){
            console.log('Passwords do not match');
            setValidationError({message:'Passwords do not match'});
            return;
        }

        setValidationError(null);
        await signupMutation({
            email: signupForm.email,
            password: signupForm.password,
            username: signupForm.username
        });
    }


    useEffect(()=>{
        if(isSuccess){
           setTimeout(() => {
                navigate('/auth/signin');
           }, 3000);
        }
    },[isSuccess, navigate]);

  return (
    <div><SignupCard 
            error={error}
            isPending={isPending}
            isSuccess={isSuccess}
            signupForm={signupForm} 
            setSignupForm={setSignupForm} 
            validationError={validationError}
            onSignupFormSubmit={onSignupFormSubmit}
            /></div>
  );
};

export default SignupContainer;