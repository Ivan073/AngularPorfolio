import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderComponent } from './order.component';
import {PIZZAS} from "../shared/pizzas";
import {Pizza} from "../shared/pizza";
import {MatToolbarModule} from "@angular/material/toolbar";
import {RouterTestingModule} from "@angular/router/testing";
import {MatTableModule} from "@angular/material/table";
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {HttpClientModule} from "@angular/common/http";
import {PizzaService} from "../services/pizza.service";
import {MatSpinner} from "@angular/material/progress-spinner";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('OrderComponent', () => {
  let component: OrderComponent;
  let fixture: ComponentFixture<OrderComponent>;
  const pizza1:Pizza = PIZZAS[0];
  const pizza2:Pizza = PIZZAS[1];

  beforeEach(async () => {
    const pizzaServiceStub = {
      orderedPizzas: [pizza1, pizza1, pizza2]
    }

    await TestBed.configureTestingModule({
      imports:[
        MatToolbarModule,
        MatDialogModule,
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        RouterTestingModule,
        HttpClientModule,
      ],
      declarations: [ OrderComponent ],
      providers:[
        {provide: PizzaService, useValue: pizzaServiceStub},
        {provide: MatDialog, useValue: {}},
        {provide: MatDialogRef, useValue: {}},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('createTotalSumTest', () => {
    expect(Number(component.totalSum)).toBe(Number(pizza1.price)+Number(pizza1.price)+Number(pizza2.price));
  });

  it('countPizzasTest', () => {
    expect(component.countPizzas(pizza1)).toBe(2);
  });

  it('addPizzaTest', () => {
    let oldPizzaAmount = component.countPizzas(pizza1)+component.countPizzas(pizza2);
    component.addPizza(pizza2);
    let pizzaAmount = component.countPizzas(pizza1)+component.countPizzas(pizza2);
    expect(Number(component.totalSum)).toBe(Number(pizza1.price)*2+Number(pizza2.price)*2);
    expect(pizzaAmount).toBe(oldPizzaAmount+1);
  });

  it('removePizzaTest', () => {
    let oldPizzaAmount = component.countPizzas(pizza1)+component.countPizzas(pizza2);
    component.removePizza(pizza1);
    let pizzaAmount = component.countPizzas(pizza1)+component.countPizzas(pizza2);
    expect(Number(component.totalSum)).toBe(Number(pizza1.price)+Number(pizza2.price));
    expect(pizzaAmount).toBe(oldPizzaAmount-1);
  });

  it('removeFromOrderTest', () => {
    component.removeFromOrder(pizza1);
    expect(Number(component.totalSum)).toBe(Number(pizza2.price));
    expect(component.countPizzas(pizza1)).toBe(0);
  });

  it('displayedPizzaTest', () => {
    let pizzas = component.displayedPizzaList().map(pizza =>pizza.name);
    let pizzaNames = [ 'Бонфесто', 'Пепперони'];
    expect(pizzas).toEqual(pizzaNames);
  });

  it('calculatePizzaSumTest', () => {
    let sum = Number(component.calculatePizzaSum(pizza1));
    expect(sum).toEqual(Number(pizza1.price)*2);
  });

  it('tableCreatedTest', () => {
    let debug: DebugElement;
    let element: HTMLElement;
    debug = fixture.debugElement.query(By.css('table'));
    element = debug.nativeElement;
    expect(element.textContent).toBeDefined();
  });

  it('allPizzasDisplayedTest', () => {
    let elements: DebugElement[];
    elements = fixture.debugElement.queryAll(By.css('tr'));
    expect(elements.length).toEqual(component.displayedPizzaList().length+2);
  });

});
