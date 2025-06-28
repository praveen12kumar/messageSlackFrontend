import WorkspaceNavbar from '@/components/organisms/workspace/WorkspaceNavbar';
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
                <div className="">
                  Sidebar
                </div>
              </ResizablePanel>
                <ResizableHandle withHandle/>
              <ResizablePanel minSize={20}>
                {children}
              </ResizablePanel>
              
            </ResizablePanelGroup>

            {children}
        </div>    
    </div>
  );
};

export default WorkspaceLayout;