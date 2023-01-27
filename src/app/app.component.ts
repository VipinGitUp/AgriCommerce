import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {routes} from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

   menuItems: any[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = routes;//.filter(menuItem => menuItem);
  }
 
}
