import {Component, Inject, Input, OnInit} from '@angular/core';
import {Tea} from "../shared/tea";
import {TeaServiceService} from "../services/tea-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tea-info',
  templateUrl: './tea-info.component.html',
  styleUrls: ['./tea-info.component.scss']
})
export class TeaInfoComponent implements OnInit {

  @Input()
  public tea!: Tea;

  constructor(@Inject('BaseURL') public BaseURL:string,
              private teaService: TeaServiceService,
              private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.teaService.getTeas().subscribe((teas)=>{
      this.route.params.subscribe((params)=>{
        let id= params['id'];
        teas = teas.filter((tea)=>{return tea.id==id});
        this.tea = teas[0];
      });
    });
  }



}
