import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {


  public recipes:Recipe[] = [
    {
      name: 'One-Pot Puttanesca',
      description: 'Just a first recipe',
      imagePath:'https://assets.bonappetit.com/photos/61f7f1b95851a853ef804dbe/1:1/w_800%2Cc_limit/puttanesca.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
