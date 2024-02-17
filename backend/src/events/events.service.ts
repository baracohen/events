import { Injectable } from '@nestjs/common';
import CreateEventDto from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectRepository } from '@nestjs/typeorm';
import Event from './entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event)
    private eventsRepository: Repository<Event>,
  ) {}

  async create(createEventDto: CreateEventDto) {
    const newEvent = await this.eventsRepository.create(createEventDto);

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
