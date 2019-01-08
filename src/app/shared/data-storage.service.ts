import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

@Injectable()
export class DataStorageService {
  address: string = 'https://angular-recipe-book-57a97.firebaseio.com/recipes.json';

  constructor(
    private http: Http,
    private recipeService: RecipeService
  ) { }

  storeRecipes() {
    return this.http.put(this.address, this.recipeService.getRecipes());
  }

  getRecipes() {
    this.http.get(this.address).pipe(map(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        for (const recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log(recipe);
            recipe['ingredients'] = [];
          }
        }
        return recipes;
      }
    )).subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);

      });
  }

}