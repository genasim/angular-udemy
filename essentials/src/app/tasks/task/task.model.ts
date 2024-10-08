export interface Task {
    id: string;
    title: string;
    summary: string;
    userId: string;
    dueDate: string;
}

export type TaskDTO = Omit<Task, 'id' | 'userId'>;