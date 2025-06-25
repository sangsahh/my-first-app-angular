import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe',
            'This is simply a test', 
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]),
          new Recipe('A Test Recipe',
            'This is simply a test', 
          'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&webp=true&resize=600,545',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ])
          
      ];

      constructor(private shoppingListService: ShoppingListService){}

    getRecipe() {
        return this.recipes.slice();
    }

    getRecipes(id: number){
      return this.recipes[id];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
    
}