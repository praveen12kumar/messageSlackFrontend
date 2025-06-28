import axios from 'axios';


export const createWorkspaceRequest = async({name, description, token})=>{
    
    try {
        const response = await axios.post('/workspaces', {name, description},{
            headers:{
                'x-access-token' : token
            }
        });

        console.log('workspace created', response);
        return response?.data;

    } catch (error) {
        console.log('Error in creating workspace', error);
        throw error?.response?.data;
    }
};


export const fetchWorkspacesRequest = async({token})=>{

    try {
        const response = await axios.get('/workspaces',{
            headers:{
                'x-access-token' : token
            }
        });

        console.log('workspace fetched', response);
        return response?.data;

    } catch (error) {
        console.log('Error in fetching workspace', error);
        throw error?.response?.data;
    }
};