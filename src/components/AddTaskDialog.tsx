// Import typů
import type { Task } from "../types/index";

// Import komponent
import {
    Dialog,
    DialogTitle,
    DialogContent,
} from "@mui/material";

import AddTaskForm from "../components/AddTaskForm";

type Props = {
    open: boolean;
    onClose: () => void;
    addTask: (task: Task) => void;
};

function AddTaskDialog({ open, onClose, addTask}: Props) {

    return (
        <>
            <Dialog open={open} onClose={onClose}>
                <DialogTitle sx={{fontWeight: 'bold'}}>Add New Task</DialogTitle>

                <DialogContent>
                    <AddTaskForm onSubmit={addTask} onClose={onClose} />
                </DialogContent>
            </Dialog>
        </>
    );

}

export default AddTaskDialog;
