import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSignup } from '@/hooks/apis/auth/useSignup';
import { validateEmail, validatePassword, validateUsername } from '@/utils/validate';

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

        if(!validateEmail(signupForm.email)){
            console.log('Invalid email format');
            setValidationError({message:'Invalid email format'});
            return;
        }

        if(!validatePassword(signupForm.password)){
            console.log('Invalid password format');
            setValidationError({message:'Min 8 chars: A-Z, a-z, 0-9, special (!@#...).'});
            return;
        }

        if(!validateUsername(signupForm.username)){
            console.log('Invalid username format');
            setValidationError({message:'Username must have 4 or more characters.'});
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
           }, 2000);

           setSignupForm({
                email:'',
                password:'',
                confrimPassword:'',
                username:'',
           });
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