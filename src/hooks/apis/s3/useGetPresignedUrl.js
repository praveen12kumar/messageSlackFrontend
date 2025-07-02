import { useQuery } from '@tanstack/react-query';

import { getPresignedUrl } from '@/apis/s3';
import { useAuth } from '@/hooks/context/useAuth';


export const useGetPresignedUrl = () =>{
    const {auth} = useAuth();

    const {isFetching, isError, error, data: url} = useQuery({
        queryFn: () => getPresignedUrl({token: auth?.token}),
        queryKey: ['getPresignedUrl'],

    });

    return{
        isFetching,
        isError,
        error,
        url
    };
};