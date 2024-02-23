import { EventsService } from "./events.service";
import CreateEventDto from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
export declare class EventsController {
    private readonly eventsService;
    constructor(eventsService: EventsService);
    create(req: any, createEventDto: CreateEventDto): Promise<import("./entities/event.entity").default>;
    findAll(): string;
    findOne(id: string): Promise<import("./entities/event.entity").default>;
    update(id: string, updateEventDto: UpdateEventDto): string;
    remove(id: string): string;
}
