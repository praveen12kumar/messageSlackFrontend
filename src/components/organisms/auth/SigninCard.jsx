import { TriangleAlert } from 'lucide-react';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent,CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

const SigninCard = ({
            signinForm, 
            setSigninForm, 
            onSigninFormSubmit,
            validationError,
            isPending,
            isSuccess,
            error
        
        }) => {
    const navigate = useNavigate();


  return (
    <Card className='w-full h-full'>
            <CardHeader>
                <CardTitle className='text-2xl text-center'>Signup</CardTitle>
                <CardDescription className='text-center'>Sign up to access your account</CardDescription>
                {
                    validationError && 
                    <div className="bg-destructive/15 text-destructive p-4 flex items-center justify-center gap-x-2 rounded-md text-center mt-6">
                        <TriangleAlert className='size-4'/>
                        <p>{validationError.message}</p>
                    </div>
                }
                {
                    error &&
                    <div className="bg-destructive/15 text-destructive p-4 flex items-center justify-center gap-x-2 rounded-md text-center mt-6">
                        <TriangleAlert className='size-4'/>
                        <p>{error.message}</p> 
                    </div>
                }
                {
                    isSuccess && (
                        <div className="bg-primary/15 text-primary p-4 flex items-center justify-center gap-x-2 rounded-md text-center mt-6">
                            <FaCheck className='size-4'/>
                            <p>Successfully signed in, redirecting to home</p>
                        </div>
                    )
                }
            </CardHeader>
            <CardContent>
                <form className='space-y-4' onSubmit={onSigninFormSubmit} >
                        <Input 
                        type="email" 
                        placeholder="Email" 
                        required
                        value ={signinForm.email}
                        onChange={(e) => setSigninForm({...signinForm, email:e.target.value})}
                        disabled ={isPending}
                        />
    
                        <Input 
                        type="password" 
                        placeholder="Password" 
                        required
                        value ={signinForm.password}
                        onChange={(e) => setSigninForm({...signinForm, password:e.target.value})}
                        disabled ={isPending}
                        />
    
                        <Button 
                            type="submit" 
                            disabled={isPending}
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