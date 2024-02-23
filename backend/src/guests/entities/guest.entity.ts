import Event from "src/events/entities/event.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Guest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  side: string;

  @Column({ nullable: true })
  attending: string;

  @Column({ nullable: true })
  attendingNumber: number;

  @ManyToOne(() => Event, (event) => event.guests)
  event: Event;
}
export default Guest;
