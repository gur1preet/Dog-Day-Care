import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  items: Array<any> = [];

  constructor() {
    this.items =[
      {name: '../../assets/c1.jpg'},
      {name: '../../assets/c2.jpg'},
      {name: '../../assets/c3.jpg'}
    ]
   }

  ngOnInit() {
  }

}
