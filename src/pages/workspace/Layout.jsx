import WorkspaceNavbar from '@/components/organisms/workspace/WorkspaceNavbar';
import WorkspacePannel from '@/components/organisms/workspace/WorkspacePannel';
import WorkspaceSidebar from '@/components/organisms/workspace/WorkspaceSidebar';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
const WorkspaceLayout = ({children}) => {
  return (
    <div className="h-dvh">
        <WorkspaceNavbar/>
       <div className="flex h-[calc(100%-40px)]">
            <WorkspaceSidebar />
            <ResizablePanelGroup direction="horizontal" autoSaveId="workspace-layout">            
              <ResizablePanel
                defaultSize={20}
                minSize={15}
                className='bg-slack-medium'
              >
                <WorkspacePannel/>
              </ResizablePanel>
                <ResizableHandle withHandle/>
              <ResizablePanel minSize={20}>
                {children}
              </ResizablePanel>
              
            </ResizablePanelGroup>
        </div>    
    </div>
  );
};

export default WorkspaceLayout;