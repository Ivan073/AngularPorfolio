import {Component, Inject, OnInit} from '@angular/core';
import {Pizza} from "../shared/pizza";
import {PizzaService} from "../services/pizza.service";
import {flyIn} from "../animations/app.animation";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyIn]': 'true',
    'style': 'display: block;'
  },
  animations:[flyIn()]
})

export class MenuComponent implements OnInit {

  public pizzas!: Pizza[];

  public selectedPizza!:Pizza;

  constructor(@Inject('BaseURL') public BaseURL:string,
              private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe(pizzas => this.pizzas = pizzas);
  }

  public onSelect(pizza: Pizza): void{
    this.selectedPizza = pizza;
  }
}
