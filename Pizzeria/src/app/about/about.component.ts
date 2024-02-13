import {Component, Inject, OnInit} from '@angular/core';
import {expand} from "../animations/app.animation";
import {OrderComponent} from "../order/order.component";
import {MatDialog} from "@angular/material/dialog";
import {PizzaListComponent} from "../pizza-list/pizza-list.component";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    expand()
  ]
})
export class AboutComponent implements OnInit {

  constructor(@Inject('BaseURL') public BaseURL:string,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ShowPizzaList(): void{
    this.dialog.open(PizzaListComponent, {
      width: '700px',
      height: 'auto'
    })
  }

}
