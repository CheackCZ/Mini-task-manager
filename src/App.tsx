import { useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";


// Import komponent
import { Alert, Snackbar } from "@mui/material";

// Import stránek
import Homepage from "./pages/HomePage";
import TaskPage from "./pages/TaskPage";

// Import typů
import type { Task } from "./types";


function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const nextId = useRef(1);

    const [snackbar, setSnackbar] = useState<{
        open: boolean,
        message: string,
        severity: "success" | "error" | "info", 
    }>({
        open: false,
        message: "",
        severity: "info",
    });

    // Metoda pro zobrazení toast oznámení
    const showSnackbar = (message: string, severity: "success" | "error" | "info") => {
        setSnackbar({ open: true, message: message, severity: severity });
    }
    // Metoda pro uzavření toast oznámení
    const handleCloseSnackbar = () => {
        setSnackbar(prev => ({ ...prev, open: false }));
    };

    // Metoda pro dokončení úkolu
    const finishTask = (task: Task) => {
        console.log("Task finished: ", task.id);
        //task.completed = true;
        setTasks(prevTasks => prevTasks.filter(t => t.id !== task.id));
        showSnackbar(`Task "${task.id}" completed!`, "success");
    };

    return (

        <>

            <Router>
                <Routes>

                    {/* Home page '/' route */}
                    <Route 
                        path="/" 
                        element={
                            <Homepage 
                                tasks={tasks} 
                                setTasks={setTasks} 
                                nextId={nextId} 
                                finishTask={finishTask} 
                                showSnackbar={showSnackbar}
                            />
                        }
                    />

                    {/* Home page '/' route */}
                    <Route path="/task/:id" element={<TaskPage finishTask={finishTask} />}/>                    

                </Routes>
            </Router>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant="filled">
                    {snackbar.message}
                </Alert>
            </Snackbar>

        </>
    
    );
}

export default App;