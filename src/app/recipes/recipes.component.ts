import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  public recepies:Recipe[] = [
    {
      name: 'MAMINHA NA CERVEJA PRETA',
      description: 'Just a first recepie',
      imagePath:'https://img.itdg.com.br/tdg/images/recipes/000/199…07152_original.jpg?mode=crop&width=710&height=400'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
