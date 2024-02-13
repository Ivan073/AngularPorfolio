import { Component, OnInit } from '@angular/core';
import {Pizza} from "../shared/pizza";
import {PizzaService} from "../services/pizza.service";

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss']
})
export class PizzaListComponent implements OnInit {
  public displayedPizzaList: Pizza[] = [];

  public displayedColumns=["pizza", "price"];

  constructor(private pizzaService: PizzaService) { }

  ngOnInit(): void {
     this.pizzaService.getPizzas().subscribe((pizzas)=>{
       console.log(pizzas);
       this.displayedPizzaList = pizzas.sort((a,b)=>(
         a.name.localeCompare(b.name))
       );
    });
  }

}
