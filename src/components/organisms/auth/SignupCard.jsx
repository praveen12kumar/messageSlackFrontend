import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';



const SignupCard = () => {
    const navigate = useNavigate();

    const [signupForm, setSignupForm] = useState({
        email:'',
        password:'',
        confrimPassword:'',
        username:'',
    });

  return (
    <Card className='w-full h-full'>
        <CardHeader>
            <CardTitle className='text-2xl text-center'>Signup</CardTitle>
            <CardDescription className='text-center'>Sign up to access your account</CardDescription>
        </CardHeader>
        <CardContent>
            <form className='space-y-4'>
                    <Input 
                    type="text" 
                    placeholder="Username" 
                    required
                    value ={signupForm.username}
                    onChange={(e) => setSignupForm({...signupForm, username:e.target.value})}
                    disabled ={false}
                    />

                    <Input 
                    type="email" 
                    placeholder="Email" 
                    required
                    value ={signupForm.email}
                    onChange={(e) => setSignupForm({...signupForm, email:e.target.value})}
                    disabled ={false}
                    />

                    <Input 
                    type="password" 
                    placeholder="Password" 
                    required
                    value ={signupForm.password}
                    onChange={(e) => setSignupForm({...signupForm, password:e.target.value})}
                    disabled ={false}
                    />

                    <Input 
                    type="" 
                    placeholder="Confirm Password" 
                    required
                    value ={signupForm.confrimPassword}
                    onChange={(e) => setSignupForm({...signupForm, confrimPassword:e.target.value})}
                    disabled ={false}
                    />

                    <Button 
                        type="submit" 
                        disabled={false}
                        size="lg"
                        className='w-full'
                    >Continue</Button>
            </form>
            <Separator className='my-5'/>
            <p className='text-sm text-center text-muted-foreground'>Already have an account? <span onClick={()=> navigate('/auth/signin')} className='text-base text-sky-700 hover:underline underline-offset-1 cursor-pointer'>Sign In</span> </p>
        </CardContent>
    </Card>
  );
};

export default SignupCard;