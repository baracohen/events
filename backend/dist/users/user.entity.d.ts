import Event from "src/events/entities/event.entity";
declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    events: Event[];
    validatePassword(password: string): Promise<boolean>;
}
export default User;
