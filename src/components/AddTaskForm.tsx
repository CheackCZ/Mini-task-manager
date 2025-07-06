import { useForm, Controller } from "react-hook-form";
import { useEffect, useState } from "react";

import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
dayjs.extend(isSameOrAfter);

// Import typů
import type { Task, User } from "../types/index";

// Import komponent
import {
    Button,
    TextField,
    Select,
    FormHelperText,
    FormControl,
    InputLabel,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MenuItem } from "@mui/material";

type Props = {
    onSubmit: (task: Task) => void;
    onClose: () => void;
};

function AddTaskForm({ onSubmit, onClose }: Props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<Task>();
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = () => {
            return new Promise((resolve, reject) => {
                fetch("https://jsonplaceholder.typicode.com/users")
                    .then((res) => res.json())
                    .then((data) => resolve(data))
                    .catch((err) => reject(err));
            });
        };

        fetchUsers()
            .then((data) => {
                console.log("Fetched users:", data);
                setUsers(data as User[]);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching users:", err);
                setError("Nepodařilo se načíst uživatele!");
                setLoading(false);
            });
    }, []);

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                id="add-task-form"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    width: 480,
                    gap: "16px",
                    paddingBottom: 0,
                }}
            >
                <TextField
                    {...register("title", { required: "Title is required" })}
                    placeholder="Title .."
                    error={!!errors.title}
                    helperText={errors.title?.message}
                />

                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Controller
                        name="date"
                        control={control}
                        rules={{
                            required: "Date is required",
                            validate: (value) =>
                                dayjs(value).isSameOrAfter(dayjs(), "day") ||
                                "Date cannot be in the past",
                        }}
                        render={({ field }) => (
                            <DatePicker
                                label="Due Date"
                                value={field.value}
                                onChange={field.onChange}
                                slotProps={{
                                    textField: {
                                        error: !!errors.date,
                                        helperText: errors.date?.message,
                                    },
                                }}
                            />
                        )}
                    />
                </LocalizationProvider>

                <FormControl error={!!errors.userId}>
                    <InputLabel id="user-label"></InputLabel>
                    <Select
                        {...register("userId", {
                            required: "User needs to be selected",
                        })}
                        error={!!errors.userId}
                        displayEmpty
                        disabled={loading || !!error}                    >
                        {loading ? (
                            <MenuItem disabled>Načítám uživatele...</MenuItem>
                        ) : error ? (
                            <MenuItem disabled>{error}</MenuItem>
                        ) : (
                            users.map((user: User) => (
                                <MenuItem key={user.id} value={user.id}>
                                    {user.name}
                                </MenuItem>
                            ))
                        )}
                    </Select>
                    {errors.userId && (
                        <FormHelperText>{errors.userId.message}</FormHelperText>
                    )}
                </FormControl>

                <Button type="submit" sx={{ backgroundColor: "text.primary" }}>
                    Add
                </Button>
                <Button
                    variant="outlined"
                    onClick={onClose}
                    sx={{ color: "text.primary", borderColor: "black" }}
                >
                    Cancel
                </Button>
            </form>
        </>
    );
}

export default AddTaskForm;
