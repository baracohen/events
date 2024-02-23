import Event from 'src/events/entities/event.entity';
export declare enum TaskStatus {
    PENDING = "pending",
    DONE = "done",
    CANCELED = "canceled"
}
declare class Task {
    id: number;
    name: string;
    description: string;
    status: TaskStatus;
    event: Event;
}
export default Task;
