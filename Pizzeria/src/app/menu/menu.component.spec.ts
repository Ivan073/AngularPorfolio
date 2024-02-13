import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuComponent } from './menu.component';
import {Observable, of} from "rxjs";
import {PIZZAS} from "../shared/pizzas";
import {Pizza} from "../shared/pizza";
import {Router} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {FlexLayoutModule} from "@angular/flex-layout";
import {PizzaService} from "../services/pizza.service";
import {baseURL} from "../shared/baseurl";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    const pizzaServiceStub =  {
      getPizzasWithDelay: function (): Observable<Pizza[]>{
        return of(PIZZAS);
      }
    }
    await TestBed.configureTestingModule({
      imports: [
        FlexLayoutModule,
        RouterTestingModule.withRoutes([{
          path:'menu',
          component: MenuComponent
        }]),
        MatGridListModule,
        MatProgressSpinnerModule
      ],
      declarations: [MenuComponent],
      providers: [
        {provide: PizzaService, useValue: pizzaServiceStub},
        {provide: 'BaseURL', useValue: baseURL}
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('pizzas should be 6', () => {
    expect(component.pizzas.length).toBe(6);
  });

  it('should display pizza name in html', () => {
    let debug: DebugElement;
    let element: HTMLElement;
    debug = fixture.debugElement.query(By.css('h1'));
    element = debug.nativeElement;
    expect(element.textContent).toContain(PIZZAS[0].name.toUpperCase());
  });

  it('first pizza should be featured', () => {
    expect(component.pizzas[0].featured).toBeTrue();
  });

  it('third pizza should cost more than 20', () => {
    expect(Number(component.pizzas[2].price)).toBeGreaterThan(20);
  });

  it('spinner should contains text Загружается', () => {
    let debug: DebugElement;
    let element: HTMLElement;
    debug = fixture.debugElement.query(By.css('.spinner-center'));
    element = debug.nativeElement;
    expect(element.textContent).toContain('Загружается');
  });

  it('selectedPizza should change', () => {
    expect(component.selectedPizza).toBeUndefined();
    const pizza = component.pizzas[0];
    component.onSelect(pizza);
    expect(component.selectedPizza).toBe(pizza);
  });
});
