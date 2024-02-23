import { Module } from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { ConfigModule } from "@nestjs/config";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { EventsModule } from "./events/events.module";
import { GuestsModule } from "./guests/guests.module";
import { TasksModule } from "./tasks/tasks.module";

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    EventsModule,
    GuestsModule,
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
