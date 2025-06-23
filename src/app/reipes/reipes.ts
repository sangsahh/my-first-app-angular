import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-reipes',
  standalone: false,
  templateUrl: './reipes.html',
  styleUrl: './reipes.css'
})
export class Reipes {
  selectRecipe: Recipe;
}
