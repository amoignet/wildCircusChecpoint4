export class UserClass {
  id: number;
  name: string;
  email: string;
  tickets: Ticket[];
}
interface Ticket {
  id: number;
  nombreTickets?: number;
  date?: string;
}
