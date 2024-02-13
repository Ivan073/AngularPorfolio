import {Comment} from "./comment";

export class Pizza{
  id!: string;
  name!: string;
  image!: string;
  featured!: boolean;
  label!: string;
  price!:string;
  description!:string;
  comments!: Comment[];
}
