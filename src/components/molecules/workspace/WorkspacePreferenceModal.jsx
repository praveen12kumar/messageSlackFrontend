import { useQueryClient } from '@tanstack/react-query';
import { TrashIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useDeleteWorkspace } from '@/hooks/apis/workspaces/useDeleteWorkspace';
import { useUpdateWorkspace } from '@/hooks/apis/workspaces/useUpdateWorkspace';
import { useWorkspacePreferencesModal } from '@/hooks/context/useWorkspacePreferencesModal';
import { useConfirm } from '@/hooks/useConfirm';

const WorkspacePreferenceModal = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [workspaceId, setWorkspaceId] = useState(null);
  const [editOpen, setEidtOpen] = useState(false);

  const { isPending, updateWorkspaceMutation } =
    useUpdateWorkspace(workspaceId);

  const {
    initialValue,
    openPreferencesModal,
    setOpenPreferensesModal,
    workspace,
  } = useWorkspacePreferencesModal();

  const { ConfirmDialog, confirmation } = useConfirm({
    title: 'Do you want to delete the workspace?',
    message:'This action cannot be undone',
  });

  const [renameValue, setRenameValue] = useState(workspace?.name);

  const { deleteWorkspaceMutation } = useDeleteWorkspace(workspaceId);

  function handleClose() {
    setOpenPreferensesModal(false);
  }

  useEffect(() => {
    setWorkspaceId(workspace?._id);
    setRenameValue(workspace?.name);
  }, [workspace]);

  async function handleDelete() {
    try {
      const ok = await confirmation();
      if(!ok) return;
      await deleteWorkspaceMutation();
      navigate('/');
      queryClient.invalidateQueries('fetchWorkspaces');
      setOpenPreferensesModal(false);
      toast.success('Workspace deleted successfully');
    } catch (error) {
      console.log('Error in deleting workspace', error);
      toast.error('Error in deleting workspace');
    }
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    try {
      await updateWorkspaceMutation(renameValue);
      queryClient.invalidateQueries(`fetchWorkspaceDetailsById-${workspaceId}`);
      setOpenPreferensesModal(false);
      toast.success('Workspace updated successfully');
    } catch (error) {
      console.log('Error in updating workspace', error);
      toast.error('Error in updating workspace');
    }
  }

  return (
    <>
      <ConfirmDialog />
      <Dialog open={openPreferencesModal} onOpenChange={handleClose}>
        <DialogContent className="p-0 bg-gray-100 overflow-hidden">
          <DialogHeader className="gb-gray-800 p-4 border-b bg-white ">
            <DialogTitle>{initialValue}</DialogTitle>
          </DialogHeader>
          <div className="px-4 pb-6 flex flex-col gap-y-2">
            <Dialog open={editOpen} onOpenChange={setEidtOpen}>
              <DialogTrigger>
                <div className="px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-sm">Workspace Name</p>
                    <p className="font-semibold text-sm hover:underline">
                      Edit
                    </p>
                  </div>
                  <p className="text-sm text-left mt-2 text-muted-foreground">
                    {initialValue}
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Rename WOrksapce</DialogTitle>
                </DialogHeader>
                <form className="space-y-4" onSubmit={handleFormSubmit}>
                  <Input
                    value={renameValue}
                    onChange={(e) => setRenameValue(e.target.value)}
                    required
                    autoFocus
                    minLength={3}
                    maxLength={50}
                    placeholder="Workspace name e.g. DevOps Team"
                    disabled={isPending}
                  />

                  <DialogFooter>
                    <DialogClose>
                      <Button variant="destructive" disabled={isPending}>
                        Cancel
                      </Button>
                    </DialogClose>
                    <Button type="submit" disabled={isPending}>
                      Save
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            <Button
              onClick={handleDelete}
              className="flex items-center gap-x-2 px-5 py-4  rounded-lg"
            >
              <TrashIcon className="size-4 mr-2" />
              Delete Workspace
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WorkspacePreferenceModal;
