import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService {
  

  private recipes: Recipe[] = [
    new Recipe(
    'A test recipe',
    'this is a test',
    'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20),
    ],
    ),
    new Recipe(
      'Another test recipe',
      'this is a test2',
      'https://www.nps.gov/subjects/camping/images/recipe_1.jpg?maxwidth=1200&maxheight=1200&autorotate=false',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ],
      ),
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    // returns new object
    return this.recipes.slice();
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}