import {createContext,useState } from 'react';

const WorkspacePreferencesModalContext = createContext();

export const WorkspacePreferencesModalContextProvider = ({ children }) => {
    
    const [openPreferencesModal, setOpenPreferensesModal] = useState(false);
    const [initialValue, setInitialValue] = useState('Edit Workspace');
    
    const [workspace, setWorkspace] = useState(null);

    
    return (
        <WorkspacePreferencesModalContext.Provider value={{openPreferencesModal, 
                                                            setOpenPreferensesModal, 
                                                            initialValue, 
                                                            setInitialValue,
                                                            workspace,
                                                            setWorkspace
                                                            }}>
            {children}
        </WorkspacePreferencesModalContext.Provider>
    );
};


export default WorkspacePreferencesModalContext;