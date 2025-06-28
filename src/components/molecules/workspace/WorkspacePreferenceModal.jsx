
import { TrashIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useWorkspacePreferencesModal } from '@/hooks/context/useWorkspacePreferencesModal';


const WorkspacePreferenceModal = () => {
    
    const {initialValue, openPreferencesModal, setOpenPreferensesModal} = useWorkspacePreferencesModal();
    console.log('initialValue', initialValue);

    function handleClose() {
        setOpenPreferensesModal(false);
    }


  return (
   <Dialog open={openPreferencesModal} onOpenChange={handleClose}>
        <DialogContent className='p-0 bg-gray-100 overflow-hidden'>
            <DialogHeader className="gb-gray-800 p-4 border-b bg-white ">
                <DialogTitle>
                    {initialValue}
                </DialogTitle>
            </DialogHeader>
            <div className="px-4 pb-6 flex flex-col gap-y-2">
                <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                        <p className='font-semibold text-sm'>Workspace Name</p>
                        <p className='font-semibold text-sm hover:underline'>Edit</p>
                    </div>
                </div>
                <Button className='flex items-center gap-x-2 px-5 py-4  rounded-lg'>
                    <TrashIcon className='size-4 mr-2'/>
                    Delete Workspace
                </Button>
            </div>
        </DialogContent>
   </Dialog>
  ); 
};

export default WorkspacePreferenceModal;