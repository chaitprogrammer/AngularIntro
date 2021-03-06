import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Inject } from '@angular/core';
import { MatSpinner } from '@angular/material';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  dishErrMess: string;

  constructor(private dishservice: DishService,
              private promotionservice: PromotionService,
              @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish().subscribe(dish=> this.dish=dish, e=> this.dishErrMess = <any>e);
    this.promotion=this.promotionservice.getFeaturedPromotion();
  }

}
