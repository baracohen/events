import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Event from 'src/events/entities/event.entity';

export enum TaskStatus {
  PENDING = 'pending',
  DONE = 'done',
  CANCELED = 'canceled',
}

@Entity()
class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.PENDING,
  })
  status: TaskStatus;

  @ManyToOne(() => Event, (event) => event.tasks)
  event: Event;
}

export default Task;
