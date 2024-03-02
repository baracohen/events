import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import {
  IsNotEmpty,
  IsEmail,
  IsOptional,
  IsString,
  IsNumber,
} from "class-validator";
import Event from "../../events/entities/event.entity";

@Entity()
class Guest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  name: string;

  @Column()
  @IsOptional()
  @IsEmail()
  email: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  side: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  attending: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsNumber()
  attendingNumber: number;

  @ManyToOne(() => Event, (event) => event.guests)
  event: Event;
}

export default Guest;
