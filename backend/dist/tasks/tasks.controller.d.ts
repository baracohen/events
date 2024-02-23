import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto): Promise<import("./entities/task.entity").default>;
    findAll(): Promise<import("./entities/task.entity").default[]>;
    findOne(id: string): Promise<import("./entities/task.entity").default>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<import("./entities/task.entity").default>;
    remove(id: string): Promise<void>;
}
