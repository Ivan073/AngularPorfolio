import {Pizza} from "./pizza";

export class Order {
  pizzas: Pizza[] =[];
  totalSum!: string;
  username!: string;
  date!: Date;
}
