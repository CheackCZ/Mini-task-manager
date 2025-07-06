import { useNavigate } from "react-router-dom";
import { selectedTaskRef } from "../pages/HomePage";

// Import of MUI Components
import {
    Card,
    CardContent,
    CardActions,
    Button,
    Typography,
} from "@mui/material";
import type { Task } from "../types/index";

interface Props {
    task: Task;
    finishTask: (task: Task) => void;
}

function TaskCard({ task, finishTask }: Props) {
    const navigate = useNavigate();

    return (
        <Card
            variant="outlined"
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
            }}
        >
            <CardContent>
                <Typography
                    variant="h3"
                    sx={{ fontSize: 24, fontWeight: "bold", mb: 1 }}
                >
                    {task.title}
                </Typography>

                <Typography
                    gutterBottom
                    sx={{ color: "text.secondary", fontSize: 14 }}
                >
                    User: {task.userName}
                </Typography>

                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Due date:{" "}
                    {task.date ? task.date.format("DD.MM.YYYY") : "No date"}
                </Typography>
            </CardContent>

            <CardActions>
                <Button
                    variant="outlined"
                    size="small"
                    sx={{
                        color: "text.secondary",
                        backgroundColor: "primary.light",
                    }}
                    onClick={() => {
                        selectedTaskRef.current = task;
                        navigate(`/task/${task.id}`, { state: { task } });
                    }}
                >
                    Task detail
                </Button>
                <Button
                    variant="contained"
                    size="small"
                    sx={{
                        color: "white",
                        backgroundColor: "green",
                        boxShadow: 0,
                    }}
                    onClick={() => {
                        finishTask(task);
                    }}
                >
                    Done
                </Button>
            </CardActions>
        </Card>
    );
}

export default TaskCard;
