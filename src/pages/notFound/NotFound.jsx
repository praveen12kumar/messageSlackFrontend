import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const NotFound = () => {
    const navigate = useNavigate();
  return (
    <div className="h-dvh w-full flex flex-col items-center justify-center">
        <Card className='text-center shadow-lg max-w-lg'>
            <CardHeader>
                <CardTitle className='text-2xl'>404 Not Found</CardTitle>
            </CardHeader>
            <CardContent>
                <img className='w-[400px] rounded-lg shadow-lg' src="https://i.ibb.co/zVrrc9nB/404.jpg" alt="not found" />

                <Button 
                    className='mt-6'
                    variant='outline'
                    onClick={() => navigate(-1)}
                    >Go Back</Button>

            </CardContent>
        </Card>
    </div>
  );
};

export default NotFound;