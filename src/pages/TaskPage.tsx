import { Card, CardContent, CardActions, Button, Typography } from "@mui/material";
import { selectedTaskRef } from "./HomePage"; 
import { useNavigate } from "react-router-dom";

// Import typů
import type { Task } from "../types";

type Props = {
    finishTask: (task: Task) => void;
};


function TaskPage({ finishTask }: Props) {
    const navigate = useNavigate();
    const task = selectedTaskRef.current;

    if (!task) {
        return (
            <div style={{display: "flex", justifyContent: "center"}}>
                <Card sx={{ m: 4, p: 2, width: 360, height: 180, display: "flex", flexDirection: "column", alignItems: "center" }}>                    <CardContent style={{display: "flex", flexDirection: "column", gap: 16}}>
                        <Typography variant="h6" color="error">
                            Task not found or expired.
                        </Typography>
                        <Button 
                            variant="contained" 
                            onClick={() => navigate("/")} 
                            sx={{ color: "white", backgroundColor: "red", boxShadow: 0 }}
                        >
                            Go back
                        </Button>
                    </CardContent>
                </Card>
            </div>
        );
    }

    const handleDone = () => {
        finishTask(task);
        navigate("/");
    }

    return (

        <div style={{display: "flex", justifyContent: "center"}}>
            <Card variant="outlined" sx={{ m: 4, p: 2, width: 480, height: 240, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>                   
                <CardContent>
        
                    <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
                            {task.userName}
                        </Typography>

                        <Typography variant="body2" sx={{ color: "text.secondary"}}>Due date: {task.date ? task.date.format("DD.MM.YYYY") : "No date"}</Typography>
                    </div>

                    <Typography variant="h5" component="div">
                        <h3>{task.title}</h3>
                    </Typography>

                    <Typography sx={{ color: "text.primary", mb: 1.5, fontSize: 12}}>Created at: {task.createdAt ? task.createdAt.format("DD.MM.YYYY") : "No date"}</Typography>

                </CardContent>

                <CardActions sx={{display: "flex", justifyContent: "flex-end"}}>
                    <Button variant="outlined" size="small" sx={{color: "text.secondary", backgroundColor: "primary.light"}} onClick={() => navigate("/")}>Back</Button>
                    <Button variant="contained" size="small" sx={{color: "white", backgroundColor: "green", boxShadow: 0}} onClick={() => handleDone()}>Done</Button>
                </CardActions>
            </Card>
        </div>

    );

}

export default TaskPage;