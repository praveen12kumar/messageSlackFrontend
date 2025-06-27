import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent,CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const SigninCard = () => {
    const navigate = useNavigate();

    const [signinForm, setSigninForm] = useState({
        email:'',
        password:'',
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
                        type="email" 
                        placeholder="Email" 
                        required
                        value ={signinForm.email}
                        onChange={(e) => setSigninForm({...signinForm, email:e.target.value})}
                        disabled ={false}
                        />
    
                        <Input 
                        type="password" 
                        placeholder="Password" 
                        required
                        value ={signinForm.password}
                        onChange={(e) => setSigninForm({...signinForm, password:e.target.value})}
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
                <p className='text-sm text-center text-muted-foreground'>Don&apos;t have an account? <span onClick={()=> navigate('/auth/signup')} className='text-base text-sky-700 hover:underline underline-offset-1 cursor-pointer'>Sign Up</span> </p>
            </CardContent>
        </Card>
  );
};

export default SigninCard;