import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {LoginComponent} from "../login/login.component";
import {PizzaService} from "../services/pizza.service";
import {OrderComponent} from "../order/order.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(@Inject('BaseURL') public BaseURL:string,
              public pizzaService: PizzaService,
              private dialog: MatDialog) { }

  /*public openLoginForm(): void{
    this.dialog.open(LoginComponent, {
      width: '500px',
      height: '350px'
    })
  }*/

  public openOrderForm(): void{
    this.dialog.open(OrderComponent, {
      width: '700px',
      height: 'auto'
    })
  }

  ngOnInit(): void {
  }

}
