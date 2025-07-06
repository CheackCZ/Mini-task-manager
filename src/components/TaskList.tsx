// Import of MUI components
import { Box, Stack } from "@mui/material";
import TaskCard from "./TaskCard"; 

// Import of Task type
import type { Task } from "../types/index"; 


type Props = {
    tasks: Task[];
    finishTask: (task: Task) => void;
}

function TaskList({tasks, finishTask}: Props) {

    return (
        <Box sx={{ width: "100%", my: 4, px: "14%", boxSizing: "border-box" }}>
            <Stack spacing={2}>
                {tasks.map((task) => (
                    <TaskCard key={task.id} task={task} finishTask={finishTask} />
                ))}
            </Stack>
        </Box>
    );
}

export default TaskList;
