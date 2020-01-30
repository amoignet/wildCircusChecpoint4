export class UserClass {
  name: string;
  email: string;
  tickets: Ticket[];
}
interface Ticket {
  nombreTickets: number;
  date: Date;
}
