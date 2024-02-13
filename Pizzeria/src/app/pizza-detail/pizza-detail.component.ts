import { Component, Inject, Input, OnInit } from '@angular/core';
import {Pizza} from "../shared/pizza";
import {PizzaService} from "../services/pizza.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {switchMap} from "rxjs"
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Comment} from "../shared/comment";
import {HttpService} from "../services/http.service";
import {visibility} from "../animations/app.animation";

@Component({
  selector: 'app-pizza-detail',
  templateUrl: './pizza-detail.component.html',
  styleUrls: ['./pizza-detail.component.scss'],
  animations: [visibility()]
})
export class PizzaDetailComponent implements OnInit {



  @Input()
  public pizza!: Pizza;
  public pizzasIds!: string[];
  public previousPizzaId!: string;
  public nextPizzaId!: string;
  public commentForm!: FormGroup;
  public comment!: Comment;
  public visibility = 'shown';

  public commentFormErrors: any = {
    'rating': '',
    'comment': '',
    'author': '',
  }

  private commentValidationMessages: any ={
    'rating':{
      'min': 'Рейтинг должен быть от 1 до 5'
    },
    'comment':{
      'required': 'Напишите отзыв'
    },
    'author':{
      'min': 'Рейтинг должен быть от 1 до 5',
      'minlength': 'Имя должно содержать как минимум 2 символа',
      'maxlength': 'Имя не может включать более 25 символов',
    },
  }


  constructor(@Inject('BaseURL') public BaseURL:string,
              private pizzaService: PizzaService,
              private route: ActivatedRoute,
              private location: Location,
              private fb: FormBuilder,
              private httpService: HttpService) {
    this.createCommentForm();
  }

  ngOnInit(): void {
    this.getPizzaDetails();
  }

  private createCommentForm(){
    this.commentForm = this.fb.group({
      rating: [0, Validators.min(1)],
      author: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      comment: ['', Validators.required],
      date: new Date()
    });

    this.commentForm.valueChanges
      .subscribe(data =>
        this.pizzaService.onFormValueChanged(this.commentForm, this.commentFormErrors, this.commentValidationMessages, data));

  }

  public onSubmit(): void{
    this.comment = this.commentForm.value;
    this.pizza.comments.push(this.comment);
    this.httpService.update(this.pizza, this.pizzaService.pizzasLink+ "/"+ this.pizza.id)
    this.resetCommentForm();
  }

  private resetCommentForm(){
    this.commentForm.reset({
      rating: 0,
      author: '',
      comment: '',
      date: new Date()
    })
  }

  private setPreviousAndNextPizza(pizzaId: string): void{
    const index: number = this.pizzasIds?.indexOf(pizzaId);
    this.previousPizzaId = this.pizzasIds[(this.pizzasIds.length+index-1)% this.pizzasIds.length];
    this.nextPizzaId = this.pizzasIds[(this.pizzasIds.length+index+1)% this.pizzasIds.length];
    this.resetCommentForm();
  }

  public getPizzaDetails(): void{
    this.pizzaService.getPizzasIds()
      .subscribe(pizzasIds => this.pizzasIds = pizzasIds);
    this.route.params.pipe(switchMap( (params:Params) => {
        this.visibility = 'hidden';
        return this.pizzaService.getPizza(params['id']);
      }))
      .subscribe(pizza => {
          this.visibility = 'shown';
          this.pizza = pizza;
          this.setPreviousAndNextPizza(pizza.id);
        });
  }

  public goBack(): void {
    this.location.back();
  }

  public addToOrder(): void{
    this.openOrderPopup();
    this.pizzaService.orderedPizzas.push(this.pizza);
  }

  public openOrderPopup(): void{
    this.pizzaService.openMessagePopup("Пицца добавлена в корзину");
  }

}
