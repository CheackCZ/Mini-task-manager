import type { Dayjs } from "dayjs";

// Task type declaration
export interface Task {
    id: number;
    title: string;
    date: Dayjs;
    createdAt?: Dayjs;
    userId?: number;
    userName?: string | null;
    completed: boolean;
}