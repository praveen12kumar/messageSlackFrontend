import WorkspaceNavbar from '@/components/organisms/workspace/WorkspaceNavbar';
import WorkspaceSidebar from '@/components/organisms/workspace/WorkspaceSidebar';
const WorkspaceLayout = ({children}) => {
  return (
    <div className="h-dvh">
        <WorkspaceNavbar/>
       <div className="flex h-[calc(100%-40px)]">
            <WorkspaceSidebar />
            {children}
        </div>    
    </div>
  );
};

export default WorkspaceLayout;