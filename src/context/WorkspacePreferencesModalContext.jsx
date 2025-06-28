import {createContext,useState } from 'react';

const WorkspacePreferencesModalContext = createContext();

export const WorkspacePreferencesModalContextProvider = ({ children }) => {
    
    const [openPreferencesModal, setOpenPreferensesModal] = useState(false);
    const [initialValue, setInitialValue] = useState('Edit Workspace');
    
    return (
        <WorkspacePreferencesModalContext.Provider value={{openPreferencesModal, setOpenPreferensesModal, initialValue, setInitialValue}}>
            {children}
        </WorkspacePreferencesModalContext.Provider>
    );
};


export default WorkspacePreferencesModalContext;