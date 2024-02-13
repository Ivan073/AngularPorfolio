import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { }

  public ScrollToContact(): void{
    setTimeout(()=>{
      this.scroller.scrollToAnchor("contact");
    },50);
  }

  public ScrollToTeaPreview(): void{
    setTimeout(()=>{
      this.scroller.scrollToAnchor("tea-preview");
    },50);
  }

  ngOnInit(): void {
  }

}
