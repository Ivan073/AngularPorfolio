import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../services/pizza.service";
import {MatDialogRef} from "@angular/material/dialog";
import {HttpService} from "../services/http.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public pizzaService:PizzaService,
              public dialogRef:MatDialogRef<SignUpComponent>,
              public http:HttpService) { }

  ngOnInit(): void {
  }

  public onSubmit(){
    this.pizzaService.checkUsername().subscribe(user=>{
      const data: any = user;
      if(data.length !=0){
        this.pizzaService.openMessagePopup("Логин занят");
      }else{
        if(this.pizzaService.user.remember){
          this.http.save(this.pizzaService.user, this.pizzaService.usersLink);
        }
        this.dialogRef.close();
        this.pizzaService.isUserSubmitted=true;
      }
    })
  }

}
