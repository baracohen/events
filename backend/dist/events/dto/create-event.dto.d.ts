declare class CreateEventDto {
    title: string;
    date: Date;
    userId: number;
    description?: string;
    location?: string;
}
export default CreateEventDto;
