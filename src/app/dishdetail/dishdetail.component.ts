import { Component, OnInit, Input } from '@angular/core';

import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';


import { DISHES } from '../shared/dishes';


@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  
  @Input()// data input from selector tag
  dish: Dish;

  constructor() { }

  ngOnInit() {
  }

}
