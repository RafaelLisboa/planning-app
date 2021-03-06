import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  public ingredients:Ingredient[] = [
    {
      name: 'Apple',
      amount: 5
    },
    {
      name: 'Cucumber',
      amount: 9
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
