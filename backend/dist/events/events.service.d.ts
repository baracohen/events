import CreateEventDto from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import Event from "./entities/event.entity";
import { Repository } from "typeorm";
import { UsersService } from "src/users/users.service";
export declare class EventsService {
    private readonly eventsRepository;
    private readonly userService;
    constructor(eventsRepository: Repository<Event>, userService: UsersService);
    create(createEventDto: CreateEventDto): Promise<Event>;
    findAll(): string;
    findOne(id: number): Promise<Event>;
    update(id: number, updateEventDto: UpdateEventDto): string;
    remove(id: number): string;
}
