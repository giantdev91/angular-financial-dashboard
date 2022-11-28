import { Message } from "./message.model";

export class ContactCard {
    photoURL!: string;
    Name!: string;
    Messages!: Message[];
    NewMessages!: number;
}   