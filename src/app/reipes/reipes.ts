import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-reipes',
  standalone: false,
  templateUrl: './reipes.html',
  styleUrl: './reipes.css',
  providers: [RecipeService]
})
export class Reipes implements OnInit{
  selectRecipe: Recipe;
  
  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe) => {
        this.selectRecipe = recipe;
      }
    );
  }
}
