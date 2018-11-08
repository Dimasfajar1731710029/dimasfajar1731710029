import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
 private recipes:Recipe[]=[

    new Recipe('BAKSO',
    'This is simply a test',
    '../src/app/img/Bakso.jpg',
[
  new Ingredient('meal',1),
  new Ingredient('tomato',2)
]),
    new Recipe('Siomay',
    'This is simply a test',
    '../src/app/img/somay.jpg',
    [
      new Ingredient('rice',1),
      new Ingredient('meal',3),
      new Ingredient('egg',1)
    ]),
    ];

    getRecipes(){
      return this.recipes.slice();
    }
    addIngredientsShoppingList(ingredients: Ingredient[]){
      this.slsService.addIngredients(ingredients);
    }
constructor(private slsService: ShoppingListService) { }

}
