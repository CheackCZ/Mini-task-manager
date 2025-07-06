import { useState } from "react";

// Import typů
import type { Task } from "../types/index";

// Import komponent
import Navbar from "../components/Navbar";
import FloatingActionButton from "../components/FloatingActionButton";

import TaskList from "../components/TaskList";
import AddTaskDialog from "../components/AddTaskDialog";
import dayjs from "dayjs";

export const selectedTaskRef = { current: null as Task | null };

type Props = {
    tasks: Task[];
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
    finishTask: (task: Task) => void;
    nextId: React.MutableRefObject<number>;
    showSnackbar: (message: string, severity: "success" | "error" | "info") => void;
};

function HomePage({ tasks, setTasks, finishTask, nextId, showSnackbar }: Props) {
    const [open, setOpen] = useState(false);

    const handleOpenForm = () => setOpen(true);
    const handleCloseForm = () => setOpen(false);

    // Metoda pro získání uživatelova jména na základě jeho id
    const getUserNameById = async (id: number | undefined): Promise<string | null> => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users?id=${id}`);
            const data = await res.json();

            if (data.length > 0) {
                return data[0].name;
            } else {
                return null; 
            }
        } catch (err) {
            console.error("Failed to fetch user:", err);
            return null;
        }
    }

    // Metoda pro přidání úkolu
    const addTask = async (task: Task) => {
        const newTask = {
            ...task, 
            userName: await getUserNameById(task.userId),
            id: nextId.current++,
            createdAt: dayjs(),
        }

        setTasks((prevTasks) => [...prevTasks, newTask]);
        handleCloseForm();

        showSnackbar(`Task ${newTask.id} added successfully!`, "info");
    };

    return (
        <>
            {/* HEADER */}
            <header>
                <Navbar />
            </header>

            {/* MAIN */}
            <main>

                {/* TaskList komponenta s jednotlivými tasky */}
                <TaskList tasks={tasks} finishTask={finishTask} />

                {/* Tlačítko pro přidání tasku */}
                <FloatingActionButton onClick={handleOpenForm} />

                {/* Dialog s formulářem pro vyplnění údajů tasku */}
                <AddTaskDialog open={open} onClose={handleCloseForm} addTask={addTask} />
                
            </main>
        </>
    );
}

export default HomePage;
