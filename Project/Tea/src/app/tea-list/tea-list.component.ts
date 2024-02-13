import {Component, Inject, OnInit} from '@angular/core';
import {Tea} from "../shared/tea";
import {TeaServiceService} from "../services/tea-service.service";

@Component({
  selector: 'app-tea-list',
  templateUrl: './tea-list.component.html',
  styleUrls: ['./tea-list.component.scss']
})
export class TeaListComponent implements OnInit {

  public teas!:Tea[];

  public ListMode: boolean=false;

  public selectedTea!: Tea;

  constructor(@Inject('BaseURL') public BaseURL:string,
              private teaservice: TeaServiceService) { }

  ngOnInit(): void {
    this.teaservice.getTeas().subscribe((teas)=>{this.teas=teas});
  }

  public onSelect(tea: Tea): void{
    this.selectedTea = tea;
  }

  changeMode(){
    this.ListMode=!this.ListMode;
  }

}
