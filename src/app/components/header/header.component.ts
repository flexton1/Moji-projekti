import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [
    trigger('smoothCollapse', [
      state('initial', style({
        height:'0',
        overflow:'hidden',
        opacity:'0'
      })),
      state('final', style({
        overflow:'hidden',
        opacity:'1'
      })),
      transition('initial=>final', animate('1s')),
      transition('final=>initial', animate('1s'))
    ]),
  ]
  })


export class HeaderComponent implements OnInit {
  
    public navbarOpen = false;
    public isNavbarOpen = true;
    
    
  
    constructor() { }

  ngOnInit(): void {
  }
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

 


}
