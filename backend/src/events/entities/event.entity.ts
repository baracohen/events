import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "src/users/user.entity";
import Guest from "src/guests/entities/guest.entity";
import Task from "src/tasks/entities/task.entity";

@Entity()
class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  location?: string;

  @Column()
  date: Date;

  @ManyToMany(() => User, (user) => user.events) // Adjust this line
  @JoinTable() // Use @JoinTable() instead of @JoinColumn()
  users: User[];

  @OneToMany(() => Guest, (guest) => guest.event)
  guests: Guest[];

  @OneToMany(() => Task, (task) => task.event)
  tasks: Task[];
}

export default Event;
