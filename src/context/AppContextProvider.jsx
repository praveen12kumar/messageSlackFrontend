import combineContext from '@/utils/combineContext';

import { AuthContextProvider } from './AuthContext';
import { CreateChannelContextProvider } from './CreateChannelContext';
import {CreateWorkspaceContextProvider} from './CreateWorkspaceContext';
import { WorkspaceContextProvider } from './WorkspaceContext';
import { WorkspacePreferencesModalContextProvider } from './WorkspacePreferencesModalContext';


export const AppContextProvider = combineContext(
        AuthContextProvider,
        CreateWorkspaceContextProvider,
        WorkspacePreferencesModalContextProvider,
        CreateChannelContextProvider,
        WorkspaceContextProvider
    );