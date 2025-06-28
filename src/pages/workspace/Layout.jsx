import WorkspaceSidebar from '@/components/organisms/workspace/WorkspaceSidebar';
const WorkspaceLayout = ({children}) => {
  return (
    <div className="h-dvh">
       <div className="flex h-full">
            <WorkspaceSidebar />
            {children}
        </div>    
    </div>
  );
};

export default WorkspaceLayout;