import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pie', 'Apple Pie', 'https://www.wikihow.com/images/f/f0/Bake-an-Apple-Pie-from-Scratch-Intro.jpg'),
    new Recipe('Pie', 'Apple Pie', 'https://www.wikihow.com/images/f/f0/Bake-an-Apple-Pie-from-Scratch-Intro.jpg'),
    new Recipe('Pie', 'Apple Pie', 'https://www.wikihow.com/images/f/f0/Bake-an-Apple-Pie-from-Scratch-Intro.jpg'),
    new Recipe('Pie', 'Apple Pie', 'https://www.wikihow.com/images/f/f0/Bake-an-Apple-Pie-from-Scratch-Intro.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
