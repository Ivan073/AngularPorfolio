import {Comment} from "./comment";

export class Tea {
  id!: string;
  name!: string;
  image!: string;
  featured!: boolean;
  label!: string;
  price!: string;
  description!: string;
  comments!: Comment[];
}
