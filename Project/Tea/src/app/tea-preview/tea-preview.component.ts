import {Component, Inject, OnInit} from '@angular/core';
import {TeaServiceService} from "../services/tea-service.service";
import {Tea} from "../shared/tea";

@Component({
  selector: 'app-tea-preview',
  templateUrl: './tea-preview.component.html',
  styleUrls: ['./tea-preview.component.scss']
})
export class TeaPreviewComponent implements OnInit {
  public teas!: Tea[];



  constructor(private teaservice: TeaServiceService,
              @Inject('BaseURL') public BaseURL:string) { }


  ngOnInit(): void {
    this.teaservice.getFeaturedTeas().subscribe((teas:Tea[]) =>{
        this.teas = teas.filter((tea) => tea.featured ==true);
        if(this.teas.length == 0){
          this.teas.push(teas[0]);
          this.teas.push(teas[1]);
        }
        else if(this.teas.length == 1){
          if(!teas[0].featured) this.teas.push(teas[0]);
          else this.teas.push(teas[1]);
        }
        else if(this.teas.length > 2){
          this.teas = [this.teas[0], this.teas[1]];
        }
      });
  }



}
