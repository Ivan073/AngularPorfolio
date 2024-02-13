import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {PizzaService} from "../services/pizza.service";
import {SignUpComponent} from "../sign-up/sign-up.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<LoginComponent>,
              public pizzaService: PizzaService,
              public dialog: MatDialog) { }

  public onSubmit(){

    this.pizzaService.getUser().subscribe(user =>{
      const data: any = user;
      if(data.length !=0){
        this.pizzaService.user = data[0];
        this.pizzaService.isUserSubmitted = true;
        this.dialogRef.close();
      }else{
        this.pizzaService.openMessagePopup("Неверная комбинация логин/пароль");
      }
    })
  }

  ngOnInit(): void {
  }

  public openSignUpForm():void{
    this.dialogRef.close();
    this.dialog.open(SignUpComponent), {
      width: '700px',
      height: '500px'
    }
  }

}
