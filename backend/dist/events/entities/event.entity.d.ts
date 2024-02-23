import User from 'src/users/user.entity';
import Guest from 'src/guests/entities/guest.entity';
import Task from 'src/tasks/entities/task.entity';
declare class Event {
    id: number;
    title: string;
    description: string;
    location?: string;
    date: Date;
    users: User[];
    guests: Guest[];
    tasks: Task[];
}
export default Event;
