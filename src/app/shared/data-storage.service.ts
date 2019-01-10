import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  address: string = 'https://angular-recipe-book-57a97.firebaseio.com/recipes.json';

  constructor(
    private http: Http,
    private recipeService: RecipeService,
    private authService: AuthService,
  ) { }

  storeRecipes() {
    const token = this.authService.getToken();

    return this.http.put(this.address + '?auth=' + token, this.recipeService.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();

    this.http.get(this.address + '?auth=' + token).pipe(map(
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