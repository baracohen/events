import { Injectable, NotFoundException } from "@nestjs/common";
import CreateEventDto from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { InjectRepository } from "@nestjs/typeorm";
import Event from "./entities/event.entity";
import { Repository } from "typeorm";
import { UsersService } from "src/users/users.service";

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
    private readonly userService: UsersService
  ) {}

  async create(createEventDto: CreateEventDto) {
    // Fetch the user associated with the event
    const user = await this.userService.getUserById(createEventDto.userId);

    // If the user doesn't exist, handle the error
    if (!user) {
      throw new NotFoundException("User not found");
    }

    // Create a new event instance
    const newEvent = this.eventsRepository.create(createEventDto);

    // Assign the user to the event's users property
    newEvent.users = [user];

    // Use TypeORM transaction to ensure data consistency
    return this.eventsRepository.manager.transaction(
      async (transactionalEntityManager) => {
        // Save the event to the database
        const savedEvent = await transactionalEntityManager.save(newEvent);

        // Log the users associated with the event (optional)
        console.log(savedEvent.users);

        return savedEvent;
      }
    );
  }

  findAll() {
    return `This action returns all events`;
  }

  async findOne(id: number): Promise<Event> {
    const event = await this.eventsRepository.findOne({
      where: {
        id: id,
      },
    });

    return event;
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
