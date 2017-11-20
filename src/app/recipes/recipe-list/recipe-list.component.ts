import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pumkin Pie',
    'A wonderful holiday classic. Easy to bake and a huge crowd-pleaser.',
    'https://d2gk7xgygi98cy.cloudfront.net/188-3-large.jpg'),
    new Recipe('Grandma’s Stuffing',
      'Very tasty and very easy to make.',
    'http://img.sndimg.com/food/image/upload/w_966,h_483,c_fill,fl_progressive,q_80/v1/img/recipes/44/93/8/picgUGZQK.jpg'),
    new Recipe('Classic Green Bean Casserole',
      'It’s the dish everyone‘s expecting on the holidays, but it’s so easy to make, you can serve it any day.',
'https://www.cscassets.com/recipes/wide_cknew/wide_24099.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
