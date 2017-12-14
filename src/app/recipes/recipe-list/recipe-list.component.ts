import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Pie', 'Apple Pie', 'https://www.wikihow.com/images/f/f0/Bake-an-Apple-Pie-from-Scratch-Intro.jpg'),
    new Recipe('More Pie', 'Apple Pie', 'https://www.wikihow.com/images/f/f0/Bake-an-Apple-Pie-from-Scratch-Intro.jpg'),
    new Recipe('Bad Pie', 'Apple Pie', 'https://www.wikihow.com/images/f/f0/Bake-an-Apple-Pie-from-Scratch-Intro.jpg'),
    new Recipe('Good Pie', 'Apple Pie', 'https://www.wikihow.com/images/f/f0/Bake-an-Apple-Pie-from-Scratch-Intro.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
