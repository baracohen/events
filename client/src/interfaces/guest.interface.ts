import { GuestStatus } from "../enums/guestStatus.enum";

export interface Guest {
  id: number;
  name: string;
  mobileNumber: string;
  side: string;
  attendingStatus: GuestStatus;
}
