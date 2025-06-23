import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  standalone: false,
  templateUrl: './recipe-item.html',
  styleUrl: './recipe-item.css'
})
export class RecipeItem {
  @Input() recipe: Recipe;
  @Output() recipeDatil = new EventEmitter<void>();

  onRecipeDetails() {
    this.recipeDatil.emit();
  }

}
