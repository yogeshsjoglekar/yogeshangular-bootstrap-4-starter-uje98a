import { Component, OnInit } from '@angular/core';

import { categories,myMenu } from './categories.mock';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories: any[] = categories;
  myMenu: any[]= myMenu;
  isCollapsed = false;
  constructor() { }

  ngOnInit() {
  }

  toggleMenu(){
    this.isCollapsed = !this.isCollapsed;
  }

}