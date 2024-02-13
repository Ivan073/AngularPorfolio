import {Injectable} from '@angular/core';
import {Pizza} from "../shared/pizza";

import {delay, Observable, map, of} from "rxjs";
import {FormGroup} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {baseURL} from "../shared/baseurl";
import {MatDialog} from "@angular/material/dialog";
import {PopupComponent} from "../popup/popup.component";
import {User} from "../shared/user";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  public pizzasLink: string = "pizzas";
  public feedbackLink: string = "feedback";
  public usersLink: string = "users";
  public ordersLink: string = "orders";
  public orderedPizzas: Pizza[] = [];
  public user: User = new User();
  public isUserSubmitted: boolean = false;

  constructor(private http: HttpClient,
              private dialog: MatDialog) {
  }

  public getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(baseURL + this.pizzasLink);
  }

  public getPizzasWithDelay(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(baseURL + this.pizzasLink)
      .pipe(delay(500));
  }

  public getFeaturedPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(baseURL+ this.pizzasLink+"?featured=true");
  }

  public getPizza(id: string): Observable<Pizza> {
    return this.http.get<Pizza>(baseURL+ this.pizzasLink+"/"+id)
      .pipe(
        delay(500)
      );
  }

  public getPizzasIds(): Observable<string[]> {
    return this.getPizzas().pipe(map(pizzas => pizzas.map(pizza => pizza.id)));
  }

  public onFormValueChanged(formGroup: FormGroup, formErrors: any, validationMessages: any, data?: any){
    if(!formGroup){
      return;
    }
    for(const field in formErrors){
        formErrors[field]= '';
        const control = formGroup.get(field);
        if(control && control.dirty && !control.valid){
          const messages = validationMessages[field];
          for(const key in control.errors){
              formErrors[field]+=messages[key]+'';
          }
        }
    }
  }
  public openMessagePopup(message:string): void {
    this.dialog.open(PopupComponent, {
      width:'500px',
      height: '110px',
      data: message
    })
  }

  public checkUsername(): Observable<User>{
    return this.http.get<User>(baseURL + this.usersLink + "?username=" + this.user.username)
      .pipe(map(user=>user));
  }

  public getUser(): Observable<User>{
    return this.http.get<User>(baseURL + this.usersLink + "?username=" + this.user.username + "&password=" + this.user.password)
      .pipe(map(user => user));
  }
}
