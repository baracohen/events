import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from "bcrypt";
import Event from "src/events/entities/event.entity";

@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @ManyToMany(() => Event, (event) => event.users) // Adjust this line
  events: Event[];

  async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 10);
  }

  async validatePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}

export default User;
