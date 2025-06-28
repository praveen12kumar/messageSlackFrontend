
import { LucideLoader, TriangleAlert } from 'lucide-react';
import {FaCheck} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';



const SignupCard = ({
                    signupForm, 
                    setSignupForm, 
                    validationError, 
                    onSignupFormSubmit,
                    error,
                    isPending,
                    isSuccess
                
                }) => {
    const navigate = useNavigate();

  return (
    <Card className='w-full h-full'>
        <CardHeader>
            <CardTitle className='text-2xl text-center'>Signup</CardTitle>
            <CardDescription className='text-center'>Sign up to access your account</CardDescription>
            {
                validationError && 
                <div className="text-sm bg-destructive/15 p-4 flex items-center gap-x-2 rounded-md text-destructive text-center mt-6">
                    <TriangleAlert className='size-4'/>
                    <p>{validationError.message}</p>
                </div>
            }

            {
                error && 
                <div className="text-sm bg-destructive/15 p-4 flex items-center gap-x-2 rounded-md text-destructive text-center mt-6">
                    <TriangleAlert className='size-4'/>
                    <p>{error.message}</p>
                </div>
            }

            {isSuccess && (
                    <div className="bg-primary/15 rounded-md p-4 flex items-center justify-center gap-x-2 text-sm text-primary mb-5">
                        <FaCheck className='size-5'/>
                        <p>Successfully signed up, redirecting to login</p>
                        <LucideLoader className='animate-spin ml-2'/>
                    </div>
                )
            }

        </CardHeader>
        <CardContent>
            <form className='space-y-4' onSubmit={onSignupFormSubmit}>
                    <Input 
                    type="text" 
                    placeholder="Username" 
                    required
                    value ={signupForm.username}
                    onChange={(e) => setSignupForm({...signupForm, username:e.target.value})}
                    disabled ={isPending}
                    />

                    <Input 
                    type="email" 
                    placeholder="Email" 
                    required
                    value ={signupForm.email}
                    onChange={(e) => setSignupForm({...signupForm, email:e.target.value})}
                    disabled ={isPending}
                    />

                    <Input 
                    type="password" 
                    placeholder="Password" 
                    required
                    value ={signupForm.password}
                    onChange={(e) => setSignupForm({...signupForm, password:e.target.value})}
                    disabled ={isPending}
                    />

                    <Input 
                    type="" 
                    placeholder="Confirm Password" 
                    required
                    value ={signupForm.confrimPassword}
                    onChange={(e) => setSignupForm({...signupForm, confrimPassword:e.target.value})}
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
            <p className='text-sm text-center text-muted-foreground'>Already have an account? <span onClick={()=> navigate('/auth/signin')} className='text-base text-sky-700 hover:underline underline-offset-1 cursor-pointer'>Sign In</span> </p>
        </CardContent>
    </Card>
  );
};

export default SignupCard;