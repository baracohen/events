import { Injectable } from "@nestjs/common";
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
    private readonly eventsRepository: Repository<Event>,
    private readonly userService: UsersService
  ) {}

  async create(createEventDto: CreateEventDto) {
    const newEvent = await this.eventsRepository.create(createEventDto);
    const users = await this.userService.getUserById(createEventDto.userId);
    newEvent.users = [users];
    await this.eventsRepository.save(newEvent);
    console.log(newEvent.users);

    return newEvent;
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
