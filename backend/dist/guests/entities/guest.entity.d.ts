import Event from "src/events/entities/event.entity";
declare class Guest {
    id: number;
    name: string;
    email: string;
    side: string;
    attending: string;
    attendingNumber: number;
    event: Event;
}
export default Guest;
